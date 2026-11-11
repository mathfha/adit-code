import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { About } from '../components/about';
import { Faq } from '../components/faq';
import { FloatingWhatsApp } from '../components/floating-whatsapp';
import { Footer } from '../components/footer';
import { Hero } from '../components/hero';
import { Navbar } from '../components/navbar';
import { Portfolio } from '../components/portfolio';
import { Services } from '../components/services';
import { Terms } from '../components/terms';

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
                <title>Jasa Website Usaha &amp; Profesional</title>
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
                <About />

                {/* 5. KETENTUAN LAYANAN */}
                <Terms />

                {/* 6. TANYA JAWAB */}
                <Faq />
            </main>

            {/* FLOATING WHATSAPP CTA */}
            <FloatingWhatsApp />

            {/* FOOTER & KONTAK */}
            <Footer />
        </div>
    );
}
