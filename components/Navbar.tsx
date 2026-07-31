'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Journal', href: '/journal' },
    { name: 'Field Notes', href: '/field-notes' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/90 backdrop-blur-xl border-b border-[#27272a] py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-zinc-700/60 shadow-md shrink-0 bg-zinc-950">
              <Image
                src="/techethix-logo.png"
                alt="TechEthix Logo"
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <span className="text-sm font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
              Smriti Priya Singh <span className="text-zinc-500 font-mono text-xs font-normal">/ TechEthix</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121215] px-3 py-1.5 rounded-full border border-[#27272a]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-zinc-800 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Connect Action */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-medium rounded-full bg-zinc-900 text-zinc-200 hover:text-white border border-[#27272a] hover:border-zinc-700 transition-all"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-[#27272a] text-zinc-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-3 rounded-2xl bg-[#121215] border border-[#27272a] flex flex-col gap-1 shadow-2xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-zinc-800 text-emerald-400'
                      : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};
