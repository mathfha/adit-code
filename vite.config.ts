import { execSync } from 'node:child_process';
import os from 'os';
import inertia from '@inertiajs/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { bunny } from 'laravel-vite-plugin/fonts';
import { defineConfig, lazyPlugins } from 'vite-plus';

function canRunPhp(): boolean {
    if (process.env.VERCEL || process.env.NOW_BUILDER) {
        return false;
    }
    try {
        execSync('php -v', { stdio: 'ignore' });
        return true;
    } catch {
        return false;
    }
}

function getDevServerOrigin(): string | undefined {
    if (process.env.VITE_DEV_SERVER_URL) {
        return process.env.VITE_DEV_SERVER_URL;
    }

    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        if (
            name.startsWith('lo') ||
            name.startsWith('br-') ||
            name.startsWith('docker') ||
            name.startsWith('veth')
        ) {
            continue;
        }

        for (const iface of interfaces[name] || []) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return `http://${iface.address}:5173`;
            }
        }
    }

    return undefined;
}

export default defineConfig({
    plugins: lazyPlugins(() => [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            refresh: true,
            fonts: [
                bunny('Instrument Sans', {
                    weights: [400, 500, 600],
                }),
            ],
        }),
        inertia(),
        react(),
        babel({
            presets: [reactCompilerPreset()],
        }),
        tailwindcss(),
        ...(canRunPhp() ? [wayfinder({ formVariants: true })] : []),
    ]),
    server: {
        host: '0.0.0.0',
        origin: getDevServerOrigin(),
        cors: true,
        watch: {
            ignored: [
                '**/.agents/**',
                '**/.claude/**',
                '**/.cursor/**',
                '**/.junie/**',
                '**/vendor/**',
            ],
        },
    },
    lint: {
        ignorePatterns: [
            'vendor/**',
            'node_modules/**',
            'public/**',
            'bootstrap/ssr/**',
            'tailwind.config.js',
            'resources/js/actions/**',
            'resources/js/components/ui/*',
            'resources/js/routes/**',
            'resources/js/wayfinder/**',
        ],
        options: {
            denyWarnings: true,
            typeAware: true,
        },
    },
    fmt: {
        printWidth: 80,
        tabWidth: 4,
        singleQuote: true,
        semi: true,
        singleAttributePerLine: false,
        htmlWhitespaceSensitivity: 'css',
        ignorePatterns: [
            '.github/**',
            'composer.json',
            'resources/js/components/ui/*',
            'resources/views/mail/*',
        ],
        sortTailwindcss: {
            functions: ['clsx', 'cn', 'cva'],
            stylesheet: 'resources/css/app.css',
        },
    },
});
