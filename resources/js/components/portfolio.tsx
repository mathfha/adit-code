import React from 'react';
import { PROJECTS } from '../data/content';

export function Portfolio() {
    return (
        <section
            id="portofolio"
            className="border-t border-[#E5E0D6] py-16 sm:py-24 dark:border-[#262A32] scroll-mt-16"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div data-reveal className="max-w-2xl">
                    <span className="text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                        Portofolio
                    </span>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#181B1F] dark:text-[#F5F2EB]">
                        Hasil Kerja &amp; Proyek Pilihan
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                        Contoh tampilan website nyata yang dirancang fokus pada kemudahan pengunjung memahami produk dan langsung menghubungi kontak Anda.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {PROJECTS.map((project) => (
                        <div
                            key={project.title}
                            data-reveal
                            data-reveal-delay={project.delay}
                            className="group flex flex-col rounded-2xl border border-[#E5E0D6] bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow dark:border-[#262A32] dark:bg-[#171A20]"
                        >
                            <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F8F6F2] dark:bg-[#0F1115] ring-1 ring-black/5 dark:ring-white/10">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                                <div>
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                                            {project.category}
                                        </span>
                                        <span className="inline-flex items-center rounded-md border border-[#BFDBFE] bg-[#EFF6FF] px-2.5 py-0.5 text-xs font-medium text-[#1D4ED8] dark:border-[#1D4ED8]/50 dark:bg-[#132038] dark:text-[#93C5FD]">
                                            {project.badge}
                                        </span>
                                    </div>
                                    <h3 className="mt-3 text-lg sm:text-xl font-bold tracking-tight text-[#181B1F] dark:text-[#F5F2EB]">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
