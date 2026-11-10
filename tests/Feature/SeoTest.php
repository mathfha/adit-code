<?php

use Illuminate\Support\Facades\Config;

test('homepage exposes Indonesian SEO metadata and structured data', function () {
    Config::set('seo.site_url', 'https://your-domain.example');

    $response = $this->get('/')
        ->assertOk()
        ->assertSee('<html lang="id"', false)
        ->assertSee('<title>Jasa Pembuatan Website UMKM - Adit Code</title>', false)
        ->assertSee('name="description"', false)
        ->assertSee('rel="canonical" href="https://your-domain.example/"', false)
        ->assertSee('property="og:image:width" content="1200"', false)
        ->assertSee('application/ld+json', false);

    preg_match(
        '/<script type="application\/ld\+json">(.*?)<\/script>/s',
        $response->getContent(),
        $matches,
    );

    expect($matches)->not->toBeEmpty();

    $structuredData = json_decode($matches[1], true, flags: JSON_THROW_ON_ERROR);

    expect($structuredData['@graph'][0]['sameAs'])
        ->toContain('https://www.instagram.com/adit.code.id/');
});

test('robots blocks crawling until the site is approved for indexing', function () {
    Config::set('seo.site_url', 'https://your-domain.example');
    Config::set('seo.indexable', false);

    $this->get('/robots.txt')
        ->assertOk()
        ->assertHeader('content-type', 'text/plain; charset=UTF-8')
        ->assertSee('Disallow: /')
        ->assertSee('Sitemap: https://your-domain.example/sitemap.xml');
});

test('sitemap contains the homepage only when indexing is enabled', function () {
    Config::set('seo.site_url', 'https://your-domain.example');
    Config::set('seo.indexable', true);

    $this->get('/sitemap.xml')
        ->assertOk()
        ->assertHeader('content-type', 'application/xml; charset=UTF-8')
        ->assertSee('<loc>https://your-domain.example/</loc>', false);

    Config::set('seo.indexable', false);

    $this->get('/sitemap.xml')
        ->assertOk()
        ->assertDontSee('<loc>', false);
});

test('unknown paths return a branded noindex not found page', function () {
    $this->get('/not-a-real-page')
        ->assertNotFound()
        ->assertSee('name="robots" content="noindex, nofollow"', false)
        ->assertSee('Halaman tidak ditemukan');
});
