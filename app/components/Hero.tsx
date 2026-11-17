'use client';

import React from 'react';
import { ArrowDown, Code2, Sparkles, FolderGit2, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 sm:pt-36 sm:pb-24 border-b hairline-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-4xl">
          {/* Monospace Availability Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-smoked-onyx border hairline-border mb-8 shadow-sm hover:border-emerald-500/40 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs text-cool-silver uppercase tracking-wider">
              STATUS: OPEN FOR NEW OPPORTUNITIES // CS @ BIT
            </span>
          </div>

          {/* Oversized Fraunces Serif Headline with tech green gradient emphasis (no italics) */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tightDisplay leading-[1.08] text-alabaster mb-6">
            Hi, I&apos;m <span className="font-medium text-alabaster">Chethana M</span>.
            <br />
            <span className="block mt-2 font-normal bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent pb-1">
              CS student who loves to learn more.
            </span>
          </h1>

          {/* Crisp Lead Copy & Bio snippet */}
          <p className="font-sans text-lg sm:text-xl text-cool-silver font-normal max-w-2xl leading-relaxed mb-10">
            Currently pursuing Computer Science at{' '}
            <span className="text-alabaster font-medium underline decoration-emerald-500/40 decoration-1 underline-offset-4">
              Bangalore Institute of Technology
            </span>
            . Passionate about architecting optimized algorithmic navigation systems, modern SaaS
            platforms, and clean, responsive interfaces.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-14">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-alabaster text-obsidian font-sans font-medium text-sm tracking-wide transition-all duration-200 hover:bg-white hover:shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <FolderGit2 className="w-4 h-4 text-obsidian" />
              <span>View my work</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-smoked-onyx hover:bg-carbon-slate text-alabaster border hairline-border hover:border-emerald-500/60 font-sans font-medium text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>Contact me</span>
            </a>

            <div className="hidden sm:flex items-center gap-2 ml-2 pl-4 border-l border-white/10 text-xs font-mono text-cool-silver">
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span>REACT • PYTHON • SQL • NEXT.JS</span>
            </div>
          </div>
        </div>

        {/* Quick Spec Metrics / Bottom Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col">
            <span className="font-mono text-[11px] uppercase tracking-wider text-cool-silver">Focus Area</span>
            <span className="font-sans text-sm text-alabaster font-medium mt-0.5">Full Stack &amp; Algorithms</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-[11px] uppercase tracking-wider text-cool-silver">Institution</span>
            <span className="font-sans text-sm text-alabaster font-medium mt-0.5">Bangalore Inst. of Tech</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-[11px] uppercase tracking-wider text-cool-silver">Core Stack</span>
            <span className="font-sans text-sm text-alabaster font-medium mt-0.5">React, Python, SQL</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-[11px] uppercase tracking-wider text-cool-silver">Year</span>
            <span className="font-mono text-sm text-emerald-400 font-semibold mt-0.5">2026 ACADEMIC</span>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Scroll Prompt */}
      <div className="absolute bottom-3 right-8 hidden lg:flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-cool-silver/60">
        <span>SCROLL DOWN</span>
        <ArrowDown className="w-3 h-3 text-emerald-400 animate-bounce" />
      </div>
    </section>
  );
}
