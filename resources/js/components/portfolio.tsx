import React from 'react';
import { PROJECTS } from '../data/content';

export function Portfolio() {
    return (
        <section
            id="portofolio"
            className="py-16 sm:py-24 scroll-mt-16"
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
                        Contoh rancangan website untuk berbagai sektor usaha, mulai dari katalog produk, sistem reservasi, hingga showcase portofolio yang terstruktur rapi.
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
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E0D6] bg-[#FAF8F5] px-2.5 py-0.5 text-[11px] font-medium text-[#5C6066] dark:border-[#2A2E37] dark:bg-[#1A1D24] dark:text-[#A8A399]">
                                            <span className="h-1.5 w-1.5 rounded-full bg-[#9CA3AF] dark:bg-[#6B7280]" aria-hidden="true" />
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
