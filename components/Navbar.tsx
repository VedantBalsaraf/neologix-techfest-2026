"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Events", href: "/events" },
        { name: "Accommodation", href: "/accommodation" },
    ];

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-[var(--glass-border)] bg-black/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                    NEO<span className="text-[var(--neon-blue)]">LOGIX</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:items-center md:space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-300 transition-colors hover:text-[var(--neon-blue)]"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/register">
                        <Button variant="neon" size="sm">Register Now</Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-zinc-300 hover:text-white focus:outline-none"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 bg-black border-b border-[var(--glass-border)]">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-zinc-300 hover:bg-zinc-900 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/register" onClick={() => setIsOpen(false)}>
                            <div className="px-3 py-2">
                                <Button variant="neon" className="w-full">Register Now</Button>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
