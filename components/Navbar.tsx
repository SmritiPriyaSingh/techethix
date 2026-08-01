'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
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
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-[#050505]/90 backdrop-blur-2xl border-b border-[#6EA8FE]/15 py-3.5 shadow-2xl shadow-black/90'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Name Text */}
          <Link href="/" className="group flex items-center gap-2">
            <span className="text-sm font-bold tracking-tight text-[#F8F8F6] group-hover:text-white transition-colors duration-200">
              Smriti Priya Singh <span className="text-[#A1A1AA] font-mono text-xs font-normal">/ TechEthix</span>
            </span>
          </Link>

          {/* Desktop Navigation with Animated Sliding Active Pill */}
          <nav className="hidden md:flex items-center gap-1 bg-[#111114]/90 px-3.5 py-1.5 rounded-full border border-[#6EA8FE]/15 shadow-inner backdrop-blur-md relative">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href === '/blog' && pathname.startsWith('/blog'));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-1 text-xs font-medium transition-colors duration-200"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-[#6EA8FE]/20 border border-[#6EA8FE]/40 rounded-full"
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? 'text-[#F8F8F6] font-semibold' : 'text-[#A1A1AA] hover:text-[#F8F8F6]'}`}>
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Connect Action Button (#6EA8FE) */}
          <div className="hidden md:flex items-center">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4.5 py-1.5 text-xs font-semibold rounded-full bg-[#6EA8FE] hover:bg-[#8BBEFF] text-[#050505] transition-all duration-300 ease-out shadow-md shadow-[#6EA8FE]/20"
              >
                <span>Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#050505]" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#111114] border border-[#6EA8FE]/20 text-[#F8F8F6] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-3.5 rounded-2xl bg-[#111114] border border-[#6EA8FE]/20 flex flex-col gap-1 shadow-2xl backdrop-blur-2xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#6EA8FE]/20 text-[#6EA8FE] font-semibold'
                      : 'text-[#A1A1AA] hover:bg-white/[0.04] hover:text-[#F8F8F6]'
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
