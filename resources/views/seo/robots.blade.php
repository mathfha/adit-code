User-agent: *
@if ($indexable)
Allow: /
@else
Disallow: /
@endif
@if ($siteUrl)
Sitemap: {{ $siteUrl }}/sitemap.xml
@endif
