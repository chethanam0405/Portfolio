'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal, Clock, Sparkles } from 'lucide-react';

export default function Footer() {
  const [timeString, setTimeString] = useState<string>('');
  const [timeZoneName, setTimeZoneName] = useState<string>('IST');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setTimeZoneName(tz.includes('Calcutta') || tz.includes('Kolkata') ? 'IST (UTC+5:30)' : tz);
      } catch (e) {
        setTimeZoneName('IST');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-obsidian border-t hairline-border overflow-hidden">
      {/* Editorial closing CTA banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-white/[0.04]">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COLOPHON &amp; ARCHITECTURAL SPEC</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-alabaster tracking-tightDisplay leading-tight">
              Designed with precision. <br />
              <span className="text-cool-silver font-normal">
                Engineered for the curious mind.
              </span>
            </h2>
            <p className="font-sans text-sm text-cool-silver">
              Handcrafted by Chethana M using Next.js App Router and TypeScript.
              Built on Bangalore Institute of Technology foundations.
            </p>
          </div>

          {/* Quick links & Back to Top */}
          <div className="flex flex-col items-start md:items-end gap-4 w-full md:w-auto">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-smoked-onyx hover:bg-carbon-slate text-alabaster border hairline-border hover:border-emerald-500/50 font-mono text-xs uppercase tracking-wider transition-all duration-200 group active:scale-95"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom status bar with Live Clock & Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-cool-silver">
          {/* Copyright */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>&copy; 2026 Chethana M. All rights reserved.</span>
          </div>

          {/* Live Local Clock readout */}
          <div className="flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-smoked-onyx border hairline-border text-[11px]">
            <Clock className="w-3.5 h-3.5 text-violet animate-pulse" />
            <span>LOCAL_TIME:</span>
            <span className="text-alabaster font-semibold tabular-nums">
              {timeString || '19:55:00'}
            </span>
            <span className="text-white/20">|</span>
            <span className="text-cool-silver/80">{timeZoneName}</span>
          </div>

          {/* Architectural tag */}
          <div className="text-[11px] text-cool-silver/70 tracking-widest uppercase">
            AETHER // OBSIDIAN MATRIX
          </div>
        </div>
      </div>
    </footer>
  );
}
