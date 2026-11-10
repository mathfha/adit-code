import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { ComponentType } from 'react';
import ReactDOMServer from 'react-dom/server';

const appName = import.meta.env.VITE_APP_NAME || 'Adit Code';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => (title ? `${title} - ${appName}` : appName),
        resolve: async (name) => {
            const page = await resolvePageComponent<{ default: ComponentType }>(
                `./pages/${name}.tsx`,
                import.meta.glob<{ default: ComponentType }>(
                    './pages/**/*.tsx',
                ),
            );

            return page.default;
        },
        setup: ({ App, props }) => <App {...props} />,
    }),
);
