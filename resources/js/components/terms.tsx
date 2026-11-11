import React from 'react';
import { TERMS } from '../data/content';

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
                            key={term.title}
                            className="rounded-2xl border border-[#E5E0D6] bg-white p-6 shadow-xs dark:border-[#262A32] dark:bg-[#171A20]"
                        >
                            <h3 className="text-base font-bold text-[#181B1F] dark:text-[#F5F2EB]">
                                {term.title}
                            </h3>
                            <p className="mt-2.5 text-xs sm:text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                {term.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
