import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { Hero } from '../components/hero';
import { Navbar } from '../components/navbar';
import { Portfolio } from '../components/portfolio';
import { Services } from '../components/services';
import {
    EMAIL_URL,
    FAQ_ITEMS as faqItems,
    GITHUB_URL,
    IG_URL,
    LINKEDIN_URL,
    NAV_ITEMS as navItems,
    SITE_URL,
    WA_URL,
} from '../data/content';

export default function Welcome() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('theme');
        const darkPreferred =
            stored === 'dark' ||
            (!stored &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);
        setIsDark(darkPreferred);
    }, []);

    const toggleTheme = () => {
        const nextDark = !isDark;
        setIsDark(nextDark);
        if (nextDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
        elements.forEach((el) => {
            const delay = el.getAttribute('data-reveal-delay');
            if (delay) {
                el.style.transitionDelay = `${delay}ms`;
            }
            el.classList.add('reveal-init');
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-[#F8F6F2] text-[#181B1F] selection:bg-[#DBEAFE] selection:text-[#1D4ED8] transition-colors duration-150 dark:bg-[#0F1115] dark:text-[#F5F2EB] dark:selection:bg-[#1E3A8A] dark:selection:text-[#93C5FD]">
            <Head>
                <title>Adit Code | Jasa Pembuatan Website Usaha dan Profesional</title>
                <meta
                    name="description"
                    content="Saya membantu usaha kecil dan profesional membuat website profil, website khusus, dan sistem informasi sederhana."
                />
            </Head>

            {/* Skip to Content for Accessibility */}
            <a
                href="#beranda"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#2563EB] focus:text-white focus:rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
                Langsung ke konten utama
            </a>

            {/* HEADER */}
            <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

            <main>
                {/* 1. BERANDA (Hero Section) */}
                <Hero />

                {/* 2. LAYANAN (Pilihan Layanan Website) */}
                <Services />

                {/* 3. PORTOFOLIO & EKSPLORASI */}
                <Portfolio />

                {/* 4. TENTANG (Profil Profesional) */}
                <section
                    id="tentang"
                    data-reveal
                    className="border-t border-[#E5E0D6] py-16 sm:py-24 dark:border-[#262A32] scroll-mt-16"
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

                {/* 5. KETENTUAN LAYANAN */}
                <section
                    id="ketentuan"
                    data-reveal
                    className="border-t border-[#E5E0D6] py-16 sm:py-24 dark:border-[#262A32] scroll-mt-16"
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
                            <div className="rounded-2xl border border-[#E5E0D6] bg-white p-6 shadow-xs dark:border-[#262A32] dark:bg-[#171A20]">
                                <div className="flex items-center gap-2.5">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EFF6FF] text-xs font-bold text-[#2563EB] dark:bg-[#132038] dark:text-[#60A5FA]">
                                        1
                                    </span>
                                    <h3 className="text-base font-bold text-[#181B1F] dark:text-[#F5F2EB]">
                                        Revisi Desain
                                    </h3>
                                </div>
                                <p className="mt-3 text-xs sm:text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                    Landing Page 3 kali, Company Profile 5 kali, Sistem Informasi 7 kali. Fitur baru di luar kesepakatan dibahas terpisah.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#E5E0D6] bg-white p-6 shadow-xs dark:border-[#262A32] dark:bg-[#171A20]">
                                <div className="flex items-center gap-2.5">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EFF6FF] text-xs font-bold text-[#2563EB] dark:bg-[#132038] dark:text-[#60A5FA]">
                                        2
                                    </span>
                                    <h3 className="text-base font-bold text-[#181B1F] dark:text-[#F5F2EB]">
                                        Domain Resmi
                                    </h3>
                                </div>
                                <p className="mt-3 text-xs sm:text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                    Biaya domain tahun pertama sudah termasuk. Saya bantu daftar dan sambungkan sampai website aktif.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#E5E0D6] bg-white p-6 shadow-xs dark:border-[#262A32] dark:bg-[#171A20]">
                                <div className="flex items-center gap-2.5">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EFF6FF] text-xs font-bold text-[#2563EB] dark:bg-[#132038] dark:text-[#60A5FA]">
                                        3
                                    </span>
                                    <h3 className="text-base font-bold text-[#181B1F] dark:text-[#F5F2EB]">
                                        Hosting &amp; Server
                                    </h3>
                                </div>
                                <p className="mt-3 text-xs sm:text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                    Hosting dan SSL (HTTPS) tahun pertama sudah termasuk, dioptimasi supaya cepat dibuka.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#E5E0D6] bg-white p-6 shadow-xs dark:border-[#262A32] dark:bg-[#171A20]">
                                <div className="flex items-center gap-2.5">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EFF6FF] text-xs font-bold text-[#2563EB] dark:bg-[#132038] dark:text-[#60A5FA]">
                                        4
                                    </span>
                                    <h3 className="text-base font-bold text-[#181B1F] dark:text-[#F5F2EB]">
                                        Materi &amp; Konten
                                    </h3>
                                </div>
                                <p className="mt-3 text-xs sm:text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                    Foto, logo, dan informasi dasar dari kamu. Saya bantu merapikan tulisannya supaya enak dibaca.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#E5E0D6] bg-white p-6 shadow-xs dark:border-[#262A32] dark:bg-[#171A20]">
                                <div className="flex items-center gap-2.5">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EFF6FF] text-xs font-bold text-[#2563EB] dark:bg-[#132038] dark:text-[#60A5FA]">
                                        5
                                    </span>
                                    <h3 className="text-base font-bold text-[#181B1F] dark:text-[#F5F2EB]">
                                        Waktu Pengerjaan
                                    </h3>
                                </div>
                                <p className="mt-3 text-xs sm:text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                    Landing Page 3-5 hari kerja, Company Profile 1-2 minggu, Sistem Informasi 2-4 minggu, dihitung sejak materi lengkap.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#E5E0D6] bg-white p-6 shadow-xs dark:border-[#262A32] dark:bg-[#171A20]">
                                <div className="flex items-center gap-2.5">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EFF6FF] text-xs font-bold text-[#2563EB] dark:bg-[#132038] dark:text-[#60A5FA]">
                                        6
                                    </span>
                                    <h3 className="text-base font-bold text-[#181B1F] dark:text-[#F5F2EB]">
                                        Garansi &amp; Panduan
                                    </h3>
                                </div>
                                <p className="mt-3 text-xs sm:text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                    Garansi perbaikan jika ada kendala teknis setelah website selesai, plus panduan praktis cara mengelola website Anda.
                                </p>
                            </div>
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
                                <div className="flex items-start gap-2">
                                    <span className="font-bold">•</span>
                                    <span>Penyusunan dokumen ruang lingkup (Scope of Work / SOW) tertulis sebelum pengembangan.</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="font-bold">•</span>
                                    <span>Pembatasan jumlah role pengguna awal yang disepakati bersama.</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="font-bold">•</span>
                                    <span>Penyediaan mekanisme cadangan data (backup database) berkala untuk keamanan operasional.</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="font-bold">•</span>
                                    <span>Serah terima source code penuh beserta dokumentasi alur sistem kepada pemilik usaha.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. TANYA JAWAB */}
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
                            {faqItems.map((item, idx) => (
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
            </main>

            {/* FLOATING WHATSAPP CTA */}
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

            {/* FOOTER & KONTAK (Unified centered layout with circular icon buttons) */}
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
                                href={WA_URL}
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
                        {navItems.map((item, idx) => (
                            <span key={item.href} className="inline-flex items-center gap-4">
                                <a
                                    href={item.href}
                                    className="transition-colors hover:text-[#F5F2EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded px-1.5 py-0.5"
                                >
                                    {item.label}
                                </a>
                                {idx < navItems.length - 1 && (
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
        </div>
    );
}
