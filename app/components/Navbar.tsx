'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowUpRight, Compass } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [coords, setCoords] = useState({ x: 384, y: 120 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handlePointerMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handlePointerMove);
    };
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian/85 backdrop-blur-md border-b hairline-border shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5 border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Mark & Name */}
          <a
            href="#"
            className="group flex items-center gap-3 transition-transform duration-200 active:scale-95"
            aria-label="Chethana M Homepage"
          >
            <div className="w-8 h-8 rounded border hairline-border bg-smoked-onyx flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/60 transition-colors">
              <Terminal className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-medium tracking-tight text-base sm:text-lg text-alabaster group-hover:text-emerald-400 transition-colors">
                Chethana M
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cool-silver/70">
                AETHER // OBSIDIAN
              </span>
            </div>
          </a>

          {/* Center Coordinates & Sys Pill (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 px-3 py-1 rounded-full bg-smoked-onyx/80 border hairline-border font-mono text-xs text-cool-silver">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-semibold">SYS_STATUS: ONLINE</span>
            <span className="text-white/20">|</span>
            <span className="text-alabaster/90">
              PTR: {String(coords.x).padStart(4, '0')},{String(coords.y).padStart(4, '0')}
            </span>
          </div>

          {/* Right Navigation & CTA */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm text-cool-silver hover:text-alabaster transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gradient-to-r after:from-emerald-400 after:to-green-500 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono tracking-wider uppercase text-alabaster bg-smoked-onyx hover:bg-carbon-slate border hairline-border hover:border-emerald-500/50 rounded transition-all duration-200 group active:scale-95 shadow-sm"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 text-[11px] font-mono tracking-wider uppercase text-alabaster bg-smoked-onyx border hairline-border rounded"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-smoked-onyx border hairline-border text-cool-silver hover:text-alabaster focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-obsidian/95 backdrop-blur-xl border-b hairline-border px-4 pt-3 pb-6 space-y-3 transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="py-2 border-b border-white/[0.05] font-mono text-[10px] uppercase text-cool-silver tracking-widest flex items-center gap-2">
            <Compass className="w-3 h-3 text-emerald-400" />
            <span>Navigation Index</span>
          </div>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-sans text-cool-silver hover:text-alabaster hover:bg-carbon-slate/50 rounded transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-emerald-400">→</span>
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block px-4 py-2.5 text-xs font-mono uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-green-600 text-alabaster rounded border hairline-border"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
