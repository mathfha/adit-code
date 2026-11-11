<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#F8F6F2">
        <meta name="description" content="Adit Code membantu UMKM dan profesional membuat website company profile, website UMKM, dan sistem informasi sederhana. Diskusikan kebutuhan website Anda.">
        <meta name="robots" content="{{ config('seo.indexable') ? 'index,follow' : 'noindex,nofollow' }}">

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        @if (filled(config('seo.site_url')))
            <link rel="canonical" href="{{ rtrim(config('seo.site_url'), '/') }}/">
            <meta property="og:url" content="{{ rtrim(config('seo.site_url'), '/') }}/">
            <meta property="og:image" content="{{ rtrim(config('seo.site_url'), '/') }}/og.png">
            <meta property="og:image:width" content="1200">
            <meta property="og:image:height" content="630">
            <meta property="og:image:alt" content="Adit Code, huruf A redup, teks code, dan aksen teal">
            <meta name="twitter:url" content="{{ rtrim(config('seo.site_url'), '/') }}/">
            <meta name="twitter:image" content="{{ rtrim(config('seo.site_url'), '/') }}/og.png">
        @endif
        <meta property="og:type" content="website">
        <meta property="og:locale" content="id_ID">
        <meta property="og:site_name" content="Adit Code">
        <meta property="og:title" content="Jasa Website Usaha &amp; Profesional - Adit Code">
        <meta property="og:description" content="Adit Code membantu UMKM dan profesional membuat website company profile, website UMKM, dan sistem informasi sederhana. Diskusikan kebutuhan website Anda.">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Jasa Website Usaha &amp; Profesional - Adit Code">
        <meta name="twitter:description" content="Adit Code membantu UMKM dan profesional membuat website company profile, website UMKM, dan sistem informasi sederhana. Diskusikan kebutuhan website Anda.">
        <meta name="twitter:image:alt" content="Adit Code, huruf A redup, teks code, dan aksen teal">

        @fonts

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head>
            <title>Jasa Website Usaha &amp; Profesional - Adit Code</title>
        </x-inertia::head>

        @php
            $structuredData = [
                '@context' => 'https://schema.org',
                '@graph' => array_values(array_filter([
                    filled(config('seo.site_url')) ? [
                        '@type' => 'ProfessionalService',
                        'name' => 'Adit Code',
                        'url' => config('seo.site_url'),
                        'description' => 'Adit Code menyediakan jasa pembuatan website untuk kebutuhan bisnis kecil dan profesional.',
                        'sameAs' => ['https://www.instagram.com/adit.code.id/'],
                    ] : null,
                    filled(config('seo.site_url')) ? [
                        '@type' => 'WebSite',
                        'name' => 'Adit Code',
                        'url' => config('seo.site_url'),
                        'inLanguage' => 'id-ID',
                    ] : null,
                ])),
            ];
        @endphp
        <script type="application/ld+json">{!! Illuminate\Support\Js::encode($structuredData) !!}</script>
        @if (filled(config('seo.umami_website_id')) && ! str_starts_with(config('seo.umami_website_id'), 'REPLACE_'))
            <script defer src="https://cloud.umami.is/script.js" data-website-id="{{ config('seo.umami_website_id') }}"></script>
        @endif
        <script>
            (function() {
                try {
                    var theme = localStorage.getItem('theme');
                    var isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
                    if (isDark) {
                        document.documentElement.classList.add('dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                    }
                } catch (e) {}
            })();
        </script>
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
