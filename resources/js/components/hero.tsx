import React from 'react';
import { WA_HERO_URL } from '../data/content';

export function Hero() {
    return (
        <section
            id="beranda"
            data-reveal
            className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 scroll-mt-16"
        >
            <div className="max-w-3xl">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-[#181B1F] dark:text-[#F5F2EB] leading-[1.18]">
                    Bantu Usaha Anda Tampil Lebih Terpercaya dengan Website yang Rapi dan Cepat.
                </h1>

                <p className="mt-5 text-base sm:text-lg text-[#5C6066] dark:text-[#A8A399] leading-relaxed max-w-2xl">
                    Mulai dari landing page promosi, profil usaha resmi, hingga sistem informasi data. Siap pakai lengkap dengan domain, hosting, dan tombol WhatsApp langsung tanpa repot urusan teknis.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    <a
                        href={WA_HERO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex w-full sm:w-auto min-h-[48px] items-center justify-center gap-2.5 rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-md active:scale-[0.96] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F6F2] dark:bg-[#2563EB] dark:hover:bg-[#1D4ED8] dark:active:bg-[#1E40AF] dark:focus-visible:ring-[#60A5FA] dark:focus-visible:ring-offset-[#0F1115]"
                    >
                        <svg
                            className="h-4 w-4 shrink-0 fill-current"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25.7-1.44 1.34-2.02 1.43-.52.08-1.19.11-3.41-.8-2.22-.92-3.66-3.17-3.77-3.32-.11-.15-.9-1.2-.9-2.29s.57-1.63.78-1.85c.2-.23.44-.28.59-.28.15 0 .3 0 .43.01.14.01.32-.05.5.38.19.45.65 1.58.71 1.7.06.11.1.25.02.4-.08.15-.12.24-.23.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.24 1.55.86.76 1.58 1 1.8 1.11.23.11.36.09.49-.06.13-.15.56-.65.71-.88.15-.22.3-.19.51-.11.21.08 1.33.63 1.56.74.23.11.38.17.44.27.06.1.06.58-.19 1.28z" />
                        </svg>
                        <span>Konsultasi Proyek</span>
                        <svg
                            className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </a>
                    <a
                        href="#layanan"
                        className="group inline-flex w-full sm:w-auto min-h-[48px] items-center justify-center gap-2.5 rounded-lg border border-[#D6D0C4] bg-white/90 px-6 py-3 text-sm font-semibold text-[#181B1F] shadow-xs transition-all duration-200 hover:border-[#181B1F]/30 hover:bg-[#F2EFE8] hover:text-[#181B1F] hover:shadow-sm active:scale-[0.96] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F6F2] dark:border-[#2C313B] dark:bg-[#171A20]/90 dark:text-[#F5F2EB] dark:hover:border-[#4B5563] dark:hover:bg-[#20242D] dark:hover:text-white dark:focus-visible:ring-[#60A5FA] dark:focus-visible:ring-offset-[#0F1115]"
                    >
                        <span>Lihat pilihan layanan</span>
                        <svg
                            className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-y-0.5 text-[#5C6066] dark:text-[#A8A399]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
