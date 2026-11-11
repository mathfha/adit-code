import React from 'react';
import { FAQ_ITEMS } from '../data/content';

export function Faq() {
    return (
        <section
            id="faq"
            data-reveal
            className="border-t border-[#E5E0D6] py-16 sm:py-24 dark:border-[#262A32] scroll-mt-16"
        >
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div data-reveal className="max-w-2xl">
                    <span className="text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                        Informasi Praktis
                    </span>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#181B1F] dark:text-[#F5F2EB]">
                        Pertanyaan yang Sering Diajukan
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                        Jawaban praktis dan ringkas untuk pertanyaan yang sering diajukan seputar alur kerja dan pembuatan website.
                    </p>
                </div>

                <div className="mt-10 divide-y divide-[#E5E0D6] border-y border-[#E5E0D6] dark:divide-[#262A32] dark:border-[#262A32]">
                    {FAQ_ITEMS.map((item, idx) => (
                        <details
                            key={idx}
                            className="group py-5 transition-colors focus-within:outline-none"
                        >
                            <summary className="flex cursor-pointer items-center justify-between text-left text-base font-semibold text-[#181B1F] transition-colors hover:text-[#2563EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded select-none dark:text-[#F5F2EB] dark:hover:text-[#60A5FA] dark:focus-visible:ring-[#60A5FA]">
                                <span className="pr-4">{item.q}</span>
                                <span className="ml-2 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-[#D6D0C4] text-xs text-[#5C6066] transition-transform group-open:rotate-180 dark:border-[#2C313B] dark:text-[#A8A399]">
                                    <svg
                                        className="h-3.5 w-3.5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </span>
                            </summary>
                            <div className="mt-3 pr-8 text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                {item.a}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
