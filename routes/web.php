<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::get('/robots.txt', function () {
    return response()
        ->view('seo.robots', [
            'siteUrl' => rtrim((string) config('seo.site_url'), '/'),
            'indexable' => config('seo.indexable'),
        ])
        ->header('Content-Type', 'text/plain; charset=UTF-8');
})->name('robots');

Route::get('/sitemap.xml', function () {
    $siteUrl = rtrim((string) config('seo.site_url'), '/');

    return response()
        ->view('seo.sitemap', [
            'siteUrl' => $siteUrl,
            'indexable' => config('seo.indexable') && $siteUrl !== '',
        ])
        ->header('Content-Type', 'application/xml; charset=UTF-8');
})->name('sitemap');
