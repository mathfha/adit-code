import React from 'react';
import { EMAIL_URL, IG_URL, NAV_ITEMS, WA_FOOTER_URL } from '../data/content';

export function Footer() {
    return (
        <footer
            id="kontak"
            className="border-t border-[#262A32] bg-[#0F1115] pt-16 pb-12 text-center text-[#A8A399] scroll-mt-16"
        >
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                {/* Contact invitation headline */}
                <div data-reveal className="mb-8 max-w-lg">
                    <span className="text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                        Kontak
                    </span>
                    <h2 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-[#F5F2EB]">
                        Punya rencana membuat atau memperbaiki website?
                    </h2>
                    <p className="mt-2 text-sm text-[#A8A399] leading-relaxed">
                        Ceritakan kebutuhan Anda, lalu kita bahas ruang lingkupnya bersama.
                    </p>
                </div>

                {/* Circular Action Icons (WhatsApp, Instagram, Email) with Official Brand Colors */}
                <div data-reveal data-reveal-delay="100" className="flex flex-col items-center">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#7E8490]">
                        Hubungi Langsung Melalui:
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a
                            href={WA_FOOTER_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Hubungi via WhatsApp (+62 812-5670-0457)"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-all hover:scale-110 hover:bg-[#20BA5A] hover:shadow-lg active:scale-[0.96] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1115]"
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

                        <a
                            href={IG_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram @adit.code.id"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-md transition-all hover:scale-110 hover:shadow-lg active:scale-[0.96] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DD2A7B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1115]"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>

                        <a
                            href={EMAIL_URL}
                            aria-label="Kirim Email ke adit.rwet@gmail.com"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EA4335] text-white shadow-md transition-all hover:scale-110 hover:bg-[#D93025] hover:shadow-lg active:scale-[0.96] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA4335] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1115]"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Centered Navigation Links with middle dot separators */}
                <nav
                    className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[#A8A399]"
                    aria-label="Navigasi Footer"
                >
                    {NAV_ITEMS.map((item, idx) => (
                        <span key={item.href} className="inline-flex items-center gap-4">
                            <a
                                href={item.href}
                                className="transition-colors hover:text-[#F5F2EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded px-1.5 py-0.5"
                            >
                                {item.label}
                            </a>
                            {idx < NAV_ITEMS.length - 1 && (
                                <span className="text-[#3E4552]" aria-hidden="true">
                                    &middot;
                                </span>
                            )}
                        </span>
                    ))}
                </nav>

                {/* Copyright & Craftsmanship (Best Practice: Dynamic Year + Craft Note) */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 text-xs text-[#7E8490]">
                    <span>&copy; {new Date().getFullYear()} Adit Code. Hak cipta dilindungi.</span>
                    <span className="hidden sm:inline text-[#3E4552]" aria-hidden="true">
                        &middot;
                    </span>
                    <span>Dibuat dengan teliti di Indonesia</span>
                </div>
            </div>
        </footer>
    );
}
