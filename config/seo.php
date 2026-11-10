<?php

return [
    'site_url' => env('SITE_URL', ''),
    'indexable' => (bool) env('SEO_INDEXABLE', false),
    'umami_website_id' => env('UMAMI_WEBSITE_ID', ''),
];
