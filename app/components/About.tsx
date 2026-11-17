'use client';

import React, { useState } from 'react';
import { 
  GraduationCap, 
  Layers, 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';

interface SkillItem {
  name: string;
  category: 'core' | 'frontend' | 'backend' | 'devops';
  level: string;
  highlight?: boolean;
}

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const skills: SkillItem[] = [
    { name: 'HTML5', category: 'frontend', level: 'Semantic UI Structure' },
    { name: 'CSS3', category: 'frontend', level: 'Responsive Layouts & Motion' },
    { name: 'React', category: 'frontend', level: 'Hooks, State & Components', highlight: true },
    { name: 'Python', category: 'backend', level: 'Algorithms & Automation', highlight: true },
    { name: 'SQL', category: 'backend', level: 'Relational DBs & Queries', highlight: true },
    { name: 'Git', category: 'devops', level: 'Version Control & Branching' },
    { name: 'GitHub', category: 'devops', level: 'Workflows & Collaboration' },
    { name: 'TypeScript', category: 'frontend', level: 'Type Safety & Interfaces' },
    { name: 'Next.js', category: 'frontend', level: 'App Router & Web Architecture' },
  ];

  const filteredSkills =
    selectedCategory === 'all'
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="about" className="relative py-24 sm:py-32 border-b hairline-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 tracking-widest uppercase mb-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
              <span>01 // BACKGROUND &amp; PROFILE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tightDisplay text-alabaster">
              Engineering with curiosity.
            </h2>
          </div>
          <p className="font-mono text-xs text-cool-silver max-w-xs text-left sm:text-right">
            UNDERGRADUATE CANDIDATE <br />
            COMPUTER SCIENCE &amp; ENGINEERING
          </p>
        </div>

        {/* 2-Column Grid: Left is Bio & BIT context; Right is Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bio Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-lg bg-smoked-onyx border hairline-border hover:border-white/20 transition-all duration-300 relative group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/10 via-transparent to-transparent pointer-events-none rounded-tr-lg" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded bg-carbon-slate border hairline-border text-emerald-400">
                  <GraduationCap className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-sans text-base font-semibold text-alabaster">
                    Academic Journey
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-cool-silver">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Undergraduate Degree</span>
                  </div>
                </div>
              </div>

              {/* Bio content */}
              <p className="font-sans text-base text-cool-silver leading-relaxed mb-4">
                I am currently studying at{' '}
                <strong className="text-alabaster font-semibold">
                  Bangalore Institute Of Technology
                </strong>
                . As a passionate computer science student who genuinely loves to learn more, I focus on turning complex computational concepts into clean, accessible software.
              </p>
              <p className="font-sans text-sm text-cool-silver/90 leading-relaxed">
                Whether it is optimizing algorithmic navigation paths for safety, engineering resilient SaaS utility engines, or designing responsive user interfaces, I believe in continuous curiosity and deep attention to detail.
              </p>

              {/* Institution badge */}
              <div className="mt-6 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-cool-silver">Department</span>
                <span className="text-alabaster font-medium">Computer Science &amp; Engineering</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs font-mono">
                <span className="text-cool-silver">Primary Drive</span>
                <span className="text-emerald-400 font-medium">Full-Stack &amp; Systems</span>
              </div>
            </div>

            {/* Quick Principles Callout */}
            <div className="p-5 rounded-lg bg-carbon-slate/40 border hairline-border">
              <div className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="font-sans text-xs text-cool-silver leading-relaxed">
                  <span className="text-alabaster font-medium">Core Philosophy:</span> Write code that is readable, scalable, and built on sound architectural fundamentals.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Skills Matrix */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-lg bg-smoked-onyx border hairline-border">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/[0.06] gap-4">
              <div>
                <h3 className="font-sans text-lg font-semibold text-alabaster flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  Technical Competencies
                </h3>
                <p className="font-sans text-xs text-cool-silver mt-0.5">
                  Languages, frameworks, databases, and workflow utilities
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 p-1 rounded-md bg-carbon-slate border hairline-border text-xs font-mono">
                {(['all', 'frontend', 'backend', 'devops'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded capitalize transition-all ${
                      selectedCategory === cat
                        ? 'bg-emerald-500 text-white font-medium shadow-sm'
                        : 'text-cool-silver hover:text-alabaster'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Skill Chips / Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={`group p-3 rounded border transition-all duration-200 flex items-center justify-between ${
                    skill.highlight
                      ? 'bg-carbon-slate/70 border-white/[0.12] hover:border-emerald-500/60 hover:bg-carbon-slate'
                      : 'bg-carbon-slate/30 hairline-border hover:border-white/20 hover:bg-carbon-slate/60'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-2 h-2 rounded-full transition-transform group-hover:scale-125 ${
                        skill.category === 'frontend'
                          ? 'bg-emerald-400'
                          : skill.category === 'backend'
                          ? 'bg-teal-400'
                          : skill.category === 'devops'
                          ? 'bg-emerald-300'
                          : 'bg-green-400'
                      }`}
                    />
                    <div>
                      <span className="font-sans text-sm font-medium text-alabaster block group-hover:text-emerald-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[10px] text-cool-silver/80 block">
                        {skill.level}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-smoked-onyx border border-white/[0.06] text-cool-silver uppercase">
                    {skill.category}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom summary indicator */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between text-xs font-mono text-cool-silver gap-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Active daily in Python, React &amp; SQL
              </span>
              <a
                href="#projects"
                className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1"
              >
                <span>View implemented projects</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
