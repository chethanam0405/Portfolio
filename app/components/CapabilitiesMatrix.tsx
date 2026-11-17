'use client';

import React from 'react';
import { Layout, Server, Cpu, Layers, GitBranch, Database, ShieldCheck, Zap } from 'lucide-react';

export default function CapabilitiesMatrix() {
  const capabilities = [
    {
      index: '01',
      title: 'Frontend Architecture',
      category: 'UI & CLIENT SYSTEMS',
      description:
        'Engineering component systems with Next.js, React, and TypeScript. Focused on high-performance rendering, zero layout shifts, and semantic web principles.',
      tech: ['React 18', 'TypeScript', 'Next.js App Router', 'Responsive UI Engineering', 'CSS3 Modules'],
      icon: Layout,
      accent: 'from-emerald-500/20 to-emerald-500/5',
      indicator: 'bg-emerald-400',
    },
    {
      index: '02',
      title: 'Full-Stack Systems',
      category: 'BACKEND & DATA',
      description:
        'Designing relational schemas and reliable database services using Python, SQL, and modern frameworks. Prioritizing data integrity, algorithmic efficiency, and clean abstractions.',
      tech: ['Python', 'SQL Queries', 'Relational Schemas', 'Backend Systems', 'Data Models'],
      icon: Server,
      accent: 'from-teal-500/20 to-teal-500/5',
      indicator: 'bg-teal-400',
    },
    {
      index: '03',
      title: 'Interactive UI Engineering',
      category: 'INTERFACES & SAAS',
      description:
        'Creating interactive digital tools, from algorithmic route optimization engines to micro-SaaS utilities and developer telemetry dashboards.',
      tech: ['Route Optimization', 'Micro-SaaS Workflows', 'Git & GitHub Ops', 'Real-time State'],
      icon: Cpu,
      accent: 'from-green-500/20 to-green-500/5',
      indicator: 'bg-green-400',
    },
  ];

  return (
    <section id="capabilities" className="relative py-24 sm:py-32 border-b hairline-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 tracking-widest uppercase mb-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
              <span>02 // ARCHITECTURAL DOMAINS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tightDisplay text-alabaster">
              Capabilities Matrix
            </h2>
          </div>
          <p className="font-mono text-xs text-cool-silver max-w-xs text-left sm:text-right">
            SYSTEM DESIGN // CAPABILITY AUDIT <br />
            THREE-PILLAR DISCIPLINE
          </p>
        </div>

        {/* 3-Column Hairline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border hairline-border rounded-lg overflow-hidden bg-smoked-onyx divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.index}
                className="group p-8 sm:p-10 flex flex-col justify-between hover:bg-carbon-slate/80 transition-all duration-300 relative"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-400 transition-all duration-300" />

                <div>
                  {/* Card Header & Index */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-cool-silver/60 tracking-wider">
                      [{item.index}]
                    </span>
                    <div className="p-2 rounded bg-carbon-slate border hairline-border text-cool-silver group-hover:text-alabaster group-hover:border-emerald-500/40 transition-colors">
                      <Icon className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                    </div>
                  </div>

                  <span className="font-mono text-[10px] tracking-widest uppercase text-cool-silver block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-alabaster mb-4 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-sans text-sm text-cool-silver leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Tech tags list */}
                <div className="pt-6 border-t border-white/[0.06]">
                  <span className="font-mono text-[10px] uppercase text-cool-silver/60 block mb-3">
                    Technologies &amp; Methods:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2.5 py-1 rounded bg-obsidian/70 border hairline-border text-cool-silver group-hover:text-alabaster transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical standards footer bar */}
        <div className="mt-6 px-6 py-4 rounded-lg bg-smoked-onyx/50 border hairline-border flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-cool-silver">
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>STANDARDS: Accessible Semantic HTML &bull; Clean Code &bull; Modular Structure</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/40">|</span>
            <span className="text-alabaster">Next.js 14 App Router Architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
}
