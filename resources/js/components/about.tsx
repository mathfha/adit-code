import React from 'react';
import { GITHUB_URL, LINKEDIN_URL, SITE_URL } from '../data/content';

export function About() {
    return (
        <section
            id="tentang"
            data-reveal
            className="py-16 sm:py-24 scroll-mt-16"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div data-reveal className="max-w-2xl">
                    <span className="text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                        Tentang Saya
                    </span>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#181B1F] dark:text-[#F5F2EB]">
                        Membangun Website yang Bekerja Nyata untuk Bisnis Anda
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                        Membantu pemilik usaha, UMKM, dan profesional memiliki website yang rapi, ringan diakses pelanggan, dan aman dari gangguan teknis.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Profil & Foto Langsung Tempel (Tanpa Card Box) */}
                    <div className="lg:col-span-5 flex flex-col items-center text-center sm:items-start sm:text-left">
                        <div className="w-full max-w-xs sm:max-w-sm">
                            <img
                                src="/images/profile-adit.png"
                                alt="Aditya Rahman - Fullstack Developer at adit.code.id"
                                className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)]"
                                loading="lazy"
                            />
                        </div>

                        <div className="mt-4 w-full">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#181B1F] dark:text-[#F5F2EB]">
                                Aditya Rahman
                            </h3>
                            <p className="mt-1 text-xs sm:text-sm text-[#2563EB] font-medium dark:text-[#60A5FA]">
                                Fullstack Developer at adit.code.id
                            </p>
                            <div className="mt-2 flex items-center justify-center sm:justify-start gap-1.5 text-xs text-[#5C6066] dark:text-[#A8A399]">
                                <svg
                                    className="h-4 w-4 shrink-0 text-[#2563EB] dark:text-[#60A5FA]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span>Kalimantan Selatan (Melayani Klien Seluruh Indonesia)</span>
                            </div>

                            {/* Tautan Profil (Icon LinkedIn, GitHub, Website) */}
                            <div className="mt-4 flex items-center justify-center sm:justify-start gap-2.5">
                                <a
                                    href={LINKEDIN_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn Aditya Rahman"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E0D6] bg-white text-[#5C6066] transition-transform hover:border-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#2563EB] active:scale-[0.96] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] dark:border-[#262A32] dark:bg-[#171A20] dark:text-[#A8A399] dark:hover:border-[#60A5FA] dark:hover:bg-[#132038] dark:hover:text-[#60A5FA]"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                                <a
                                    href={GITHUB_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub Aditya Rahman"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E0D6] bg-white text-[#5C6066] transition-transform hover:border-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#2563EB] active:scale-[0.96] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] dark:border-[#262A32] dark:bg-[#171A20] dark:text-[#A8A399] dark:hover:border-[#60A5FA] dark:hover:bg-[#132038] dark:hover:text-[#60A5FA]"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href={SITE_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Website matfha.my.id"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E0D6] bg-white text-[#5C6066] transition-transform hover:border-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#2563EB] active:scale-[0.96] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] dark:border-[#262A32] dark:bg-[#171A20] dark:text-[#A8A399] dark:hover:border-[#60A5FA] dark:hover:bg-[#132038] dark:hover:text-[#60A5FA]"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Cerita Latar Belakang */}
                    <div className="lg:col-span-7 space-y-6">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#181B1F] dark:text-[#F5F2EB]">
                                Latar Belakang
                            </h3>
                            <div className="mt-4 space-y-3.5 text-sm sm:text-base text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                <p>
                                    Halo, saya Aditya Rahman. Saya membangun Adit Code untuk membantu pelaku usaha dan profesional memiliki sarana promosi digital yang tertata rapi, nyaman dibuka calon pelanggan, dan mudah dihubungi via WhatsApp.
                                </p>
                                <p>
                                    Dengan latar belakang pendidikan Multimedia (SMKN 1 Gambut) serta Sistem Informasi (Politeknik Negeri Banjarmasin), saya memadukan estetika visual yang bersih dengan rancangan website yang terstruktur tanpa kode yang memberatkan perangkat.
                                </p>
                                <p>
                                    Pengalaman saya dalam pemeliharaan server dan pengujian keamanan website di PT Inovasi Informatik Sinergi dan Pentester.ID memberi jaminan bahwa setiap website yang saya bangun memiliki perlindungan yang baik, data pelanggan aman, dan sistem cadangan data (backup) siap pakai.
                                </p>
                                <p>
                                    Saya percaya kerja sama yang memuaskan diawali dari komunikasi yang santai dan terbuka. Setiap kebutuhan, estimasi waktu, serta biaya dibicarakan tanpa istilah teknis yang membingungkan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
