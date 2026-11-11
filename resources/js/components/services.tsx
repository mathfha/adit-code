import React from 'react';
import { SERVICES } from '../data/content';

export function Services() {
    return (
        <section
            id="layanan"
            className="py-16 sm:py-24 scroll-mt-16"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div data-reveal className="max-w-2xl">
                    <span className="text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                        Solusi Digital
                    </span>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#181B1F] dark:text-[#F5F2EB]">
                        Pilihan Paket Website Usaha
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                        Pilihan paket website yang dirancang sesuai kebutuhan usaha Anda, sudah termasuk nama domain dan hosting siap pakai.
                    </p>
                </div>

                {/* Services Cards (MUI BasicCard Architecture: Card, CardContent, CardActions) */}
                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {SERVICES.map((service) => (
                        <div
                            key={service.title}
                            data-reveal
                            data-reveal-delay={service.delay}
                            className={`flex w-full min-w-0 flex-col justify-between rounded-2xl border bg-white shadow-xs transition-all hover:border-[#2563EB]/40 hover:shadow-md dark:bg-[#171A20] ${
                                service.highlighted
                                    ? 'border-[#2563EB]/40 hover:border-[#2563EB] dark:border-[#3B82F6]/50'
                                    : 'border-[#E5E0D6] dark:border-[#262A32]'
                            }`}
                        >
                            <div className="flex flex-1 flex-col p-6 sm:p-7">
                                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                                    {service.category}
                                </span>
                                <h3 className="mt-1.5 text-2xl font-bold tracking-tight text-[#181B1F] dark:text-[#F5F2EB]">
                                    {service.title}
                                </h3>
                                <p className="mt-3 text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Yang Anda Dapatkan */}
                                <div className="mt-5 border-t border-[#EFECE5] pt-4 dark:border-[#262A32] flex-1">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#181B1F] dark:text-[#F5F2EB]">
                                        Yang Anda dapatkan:
                                    </p>
                                    <ul className="mt-3 space-y-2 text-xs text-[#5C6066] dark:text-[#A8A399]">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA]">•</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Tombol CTA */}
                            <div className="px-6 pb-6 pt-2">
                                <a
                                    href={service.ctaUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-4 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-sm active:scale-[0.96] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:bg-[#2563EB] dark:hover:bg-[#1D4ED8] dark:focus-visible:ring-[#60A5FA] dark:focus-visible:ring-offset-[#171A20]"
                                >
                                    <svg
                                        className="h-3.5 w-3.5 shrink-0 fill-current"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25.7-1.44 1.34-2.02 1.43-.52.08-1.19.11-3.41-.8-2.22-.92-3.66-3.17-3.77-3.32-.11-.15-.9-1.2-.9-2.29s.57-1.63.78-1.85c.2-.23.44-.28.59-.28.15 0 .3 0 .43.01.14.01.32-.05.5.38.19.45.65 1.58.71 1.7.06.11.1.25.02.4-.08.15-.12.24-.23.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.24 1.55.86.76 1.58 1 1.8 1.11.23.11.36.09.49-.06.13-.15.56-.65.71-.88.15-.22.3-.19.51-.11.21.08 1.33.63 1.56.74.23.11.38.17.44.27.06.1.06.58-.19 1.28z" />
                                    </svg>
                                    <span>Tanya Biaya via WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
