<?php

ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

putenv('VERCEL=1');
$_ENV['VERCEL'] = '1';
$_SERVER['VERCEL'] = '1';

try {
    $storageDir = '/tmp/storage';
    $dirs = [
        $storageDir . '/framework/views',
        $storageDir . '/framework/cache',
        $storageDir . '/framework/cache/data',
        $storageDir . '/framework/sessions',
        $storageDir . '/logs',
        $storageDir . '/cache',
    ];

    foreach ($dirs as $dir) {
        if (!is_dir($dir)) {
            mkdir($dir, 0755, true);
        }
    }

    foreach ([
        'APP_STORAGE' => $storageDir,
        'APP_SERVICES_CACHE' => $storageDir . '/cache/services.php',
        'APP_PACKAGES_CACHE' => $storageDir . '/cache/packages.php',
        'APP_CONFIG_CACHE' => $storageDir . '/cache/config.php',
        'APP_ROUTES_CACHE' => $storageDir . '/cache/routes.php',
        'APP_EVENTS_CACHE' => $storageDir . '/cache/events.php',
        'VIEW_COMPILED_PATH' => $storageDir . '/framework/views',
    ] as $key => $val) {
        putenv("{$key}={$val}");
        $_ENV[$key] = $val;
        $_SERVER[$key] = $val;
    }

    require __DIR__ . '/../public/index.php';
} catch (\Throwable $e) {
    http_response_code(500);
    echo "<h1>PHP Fatal Error on Vercel</h1>";
    $curr = $e;
    while ($curr) {
        echo "<h3>" . get_class($curr) . ": " . htmlspecialchars($curr->getMessage()) . "</h3>";
        echo "<p><strong>File:</strong> " . htmlspecialchars($curr->getFile()) . ":" . $curr->getLine() . "</p>";
        echo "<pre>" . htmlspecialchars($curr->getTraceAsString()) . "</pre><hr>";
        $curr = $curr->getPrevious();
    }
}

