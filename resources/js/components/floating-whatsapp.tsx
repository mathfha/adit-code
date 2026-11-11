import React from 'react';
import { WA_URL } from '../data/content';

export function FloatingWhatsApp() {
    return (
        <aside
            aria-label="Kontak Cepat"
            className="fixed bottom-5 right-5 z-30"
        >
            <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hubungi Adit lewat WhatsApp"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:bg-[#20BA5A] active:scale-[0.96] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 dark:bg-[#25D366] dark:hover:bg-[#20BA5A] dark:focus-visible:ring-[#25D366] dark:focus-visible:ring-offset-[#0F1115]"
            >
                <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25.7-1.44 1.34-2.02 1.43-.52.08-1.19.11-3.41-.8-2.22-.92-3.66-3.17-3.77-3.32-.11-.15-.9-1.2-.9-2.29s.57-1.63.78-1.85c.2-.23.44-.28.59-.28.15 0 .3 0 .43.01.14.01.32-.05.5.38.19.45.65 1.58.71 1.7.06.11.1.25.02.4-.08.15-.12.24-.23.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.24 1.55.86.76 1.58 1 1.8 1.11.23.11.36.09.49-.06.13-.15.56-.65.71-.88.15-.22.3-.19.51-.11.21.08 1.33.63 1.56.74.23.11.38.17.44.27.06.1.06.58-.19 1.28z" />
                </svg>
            </a>
        </aside>
    );
}
