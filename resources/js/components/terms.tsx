import React from 'react';
import { SYSTEM_INFO_NOTES, TERMS } from '../data/content';

export function Terms() {
    return (
        <section
            id="ketentuan"
            data-reveal
            className="py-16 sm:py-24 scroll-mt-16"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div data-reveal className="max-w-2xl">
                    <span className="text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                        Komitmen Kerja Sama
                    </span>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#181B1F] dark:text-[#F5F2EB]">
                        Ketentuan &amp; Jaminan Layanan
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                        Transparansi ruang lingkup, jadwal pengerjaan, dan jaminan teknis untuk menjaga kepastian hasil kerja serta kenyamanan bersama.
                    </p>
                </div>

                {/* Grid 6 Ketentuan Utama */}
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {TERMS.map((term) => (
                        <div
                            key={term.num}
                            className="rounded-2xl border border-[#E5E0D6] bg-white p-6 shadow-xs dark:border-[#262A32] dark:bg-[#171A20]"
                        >
                            <div className="flex items-center gap-2.5">
                                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EFF6FF] text-xs font-bold text-[#2563EB] dark:bg-[#132038] dark:text-[#60A5FA]">
                                    {term.num}
                                </span>
                                <h3 className="text-base font-bold text-[#181B1F] dark:text-[#F5F2EB]">
                                    {term.title}
                                </h3>
                            </div>
                            <p className="mt-3 text-xs sm:text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                {term.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Catatan Khusus Sistem Informasi */}
                <div className="mt-8 rounded-2xl border border-[#2563EB]/30 bg-[#EFF6FF]/60 p-6 dark:border-[#2563EB]/40 dark:bg-[#132038]/50">
                    <h4 className="text-sm font-bold text-[#1D4ED8] dark:text-[#93C5FD] flex items-center gap-2">
                        <svg
                            className="h-4 w-4 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        Catatan Khusus Pengembangan Sistem Informasi &amp; Web App
                    </h4>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#1E3A8A] dark:text-[#BFDBFE]">
                        {SYSTEM_INFO_NOTES.map((note, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                                <span className="font-bold">•</span>
                                <span>{note}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
