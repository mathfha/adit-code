import React, { useEffect, useState } from 'react';
import { NAV_ITEMS, WA_HERO_URL } from '../data/content';
import { cn } from '../lib/utils';

interface NavbarProps {
    isDark: boolean;
    onToggleTheme: () => void;
}

export function Navbar({ isDark, onToggleTheme }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [mobileMenuOpen]);

    return (
        <header className="sticky top-0 z-40 w-full bg-[#F8F6F2]/95 backdrop-blur-sm dark:bg-[#0F1115]/95">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-end md:justify-between px-4 sm:px-6 lg:px-8">
                {/* Desktop Navigation */}
                <nav
                    className="hidden md:flex items-center gap-6 text-sm text-[#5C6066] dark:text-[#A8A399]"
                    aria-label="Navigasi Utama"
                >
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="transition-colors hover:text-[#181B1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 rounded px-1.5 py-1 dark:hover:text-[#F5F2EB] dark:focus-visible:ring-[#60A5FA] dark:focus-visible:ring-offset-[#0F1115]"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Actions: Theme Toggle + Mobile Menu Button */}
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={onToggleTheme}
                        role="switch"
                        aria-checked={isDark}
                        aria-label={
                            isDark
                                ? 'Beralih ke mode terang'
                                : 'Beralih ke mode gelap'
                        }
                        className="relative inline-flex h-10 w-[72px] shrink-0 cursor-pointer items-center rounded-full border border-[#E5E0D6] bg-[#EFECE5] p-1.5 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:border-[#262A32] dark:bg-[#13151A] dark:focus-visible:ring-[#60A5FA] dark:focus-visible:ring-offset-[#0F1115]"
                    >
                        {/* Background track icons */}
                        <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-2.5">
                            {/* Sun icon on left */}
                            <svg
                                className="h-3.5 w-3.5 text-[#D97706]/70 dark:text-[#A8A399]/40"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <circle cx="12" cy="12" r="4" />
                                <path
                                    strokeLinecap="round"
                                    d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m14.14-14.14l-1.41 1.41"
                                />
                            </svg>
                            {/* Moon icon on right */}
                            <svg
                                className="h-3.5 w-3.5 text-[#5C6066]/40 dark:text-[#60A5FA]/80"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        </span>

                        {/* Sliding Thumb */}
                        <span
                            className={cn(
                                'pointer-events-none relative flex h-7 w-7 transform items-center justify-center rounded-full shadow-md transition-transform duration-300 ease-out',
                                isDark
                                    ? 'translate-x-8 bg-[#20242D] text-[#60A5FA] shadow-black/40'
                                    : 'translate-x-0 bg-white text-[#D97706] shadow-black/10'
                            )}
                        >
                            {isDark ? (
                                <svg
                                    className="h-3.5 w-3.5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                >
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            ) : (
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <circle cx="12" cy="12" r="4" />
                                    <path
                                        strokeLinecap="round"
                                        d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m14.14-14.14l-1.41 1.41"
                                    />
                                </svg>
                            )}
                        </span>
                    </button>

                    {/* Mobile Menu Button (44px touch target) */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-expanded={mobileMenuOpen}
                        aria-label="Buka menu navigasi"
                        className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#E5E0D6] bg-white text-[#5C6066] md:hidden hover:bg-[#EFECE5] hover:text-[#181B1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] dark:border-[#262A32] dark:bg-[#171A20] dark:text-[#A8A399] dark:hover:bg-[#20242D] dark:hover:text-[#F5F2EB] dark:focus-visible:ring-[#60A5FA] active:scale-[0.96] transition-transform"
                    >
                        {mobileMenuOpen ? (
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {mobileMenuOpen && (
                <div className="border-t border-[#E5E0D6] bg-[#F8F6F2] px-4 py-4 md:hidden dark:border-[#262A32] dark:bg-[#0F1115]">
                    <nav
                        className="flex flex-col gap-3 text-sm text-[#5C6066] dark:text-[#A8A399]"
                        aria-label="Navigasi Mobile"
                    >
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="rounded px-2 py-2 hover:bg-white hover:text-[#181B1F] dark:hover:bg-[#171A20] dark:hover:text-[#F5F2EB]"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href={WA_HERO_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#1D4ED8] dark:bg-[#3B82F6] dark:text-white dark:hover:bg-[#2563EB] active:scale-[0.96] transition-transform"
                        >
                            Diskusikan via WhatsApp
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
