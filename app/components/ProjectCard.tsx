'use client';

import React, { useState } from 'react';
import { 
  ExternalLink, 
  ArrowUpRight, 
  Navigation, 
  Layers, 
  Activity, 
  Database,
  Terminal,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import { GitHubIcon } from './Icons';

export interface ProjectItem {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  status: string;
  highlights: string[];
  wireframeType: 'navigation' | 'saas' | 'analytics' | 'database';
}

interface ProjectCardProps {
  project: ProjectItem;
  viewMode?: 'row' | 'grid';
}

export default function ProjectCard({ project, viewMode = 'row' }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Render an architectural wireframe preview diagram for each project
  const renderWireframePreview = () => {
    switch (project.wireframeType) {
      case 'navigation':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[10px] text-cool-silver/70 relative select-none">
            {/* Navisafe Wireframe */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Navigation className="w-3.5 h-3.5" />
                <span>NAVISAFE_ROUTING_ENGINE</span>
              </span>
              <span className="text-emerald-400">LATENCY: 14ms</span>
            </div>
            
            {/* Route Map Graph Node abstraction */}
            <div className="my-auto py-3 px-2 relative">
              <div className="flex items-center justify-between text-[9px] mb-2 text-cool-silver/90">
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">ORIGIN: BIT_CAMPUS</span>
                <span className="text-emerald-400 font-bold">&rarr; OPTIMIZED (99.4% SAFE) &rarr;</span>
                <span className="px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">DEST: TECH_HUB</span>
              </div>
              {/* Waypoints line */}
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden relative">
                <div className="h-full bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 w-[85%] rounded-full animate-pulse" />
              </div>
              <div className="flex justify-between text-[8px] text-cool-silver/60 mt-1">
                <span>Waypoint_Alpha</span>
                <span className="text-emerald-400">Hazard Avoided (-4.2 km)</span>
                <span>Waypoint_Beta</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[9px]">
              <span className="text-cool-silver">DIJKSTRA_A* HYBRID // ACTIVE</span>
              <span className="text-alabaster font-mono">STATUS: 200 OK</span>
            </div>
          </div>
        );

      case 'saas':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[10px] text-cool-silver/70 relative select-none">
            {/* SaaS Platform Wireframe */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Layers className="w-3.5 h-3.5" />
                <span>SAAS_METRICS_DASHBOARD</span>
              </span>
              <span className="text-emerald-400">TIER: ENTERPRISE</span>
            </div>

            <div className="my-auto grid grid-cols-3 gap-2 py-2">
              <div className="p-2 rounded bg-black/40 border border-white/[0.06] text-center">
                <span className="block text-[8px] text-cool-silver">ARR_SIM</span>
                <span className="block text-xs font-bold text-alabaster">$48.2k</span>
              </div>
              <div className="p-2 rounded bg-black/40 border border-white/[0.06] text-center">
                <span className="block text-[8px] text-cool-silver">ACTIVE_USERS</span>
                <span className="block text-xs font-bold text-emerald-400">1,420</span>
              </div>
              <div className="p-2 rounded bg-black/40 border border-white/[0.06] text-center">
                <span className="block text-[8px] text-cool-silver">RETENTION</span>
                <span className="block text-xs font-bold text-emerald-400">96.8%</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[9px]">
              <span className="text-cool-silver">MULTI_TENANCY // JWT_AUTH</span>
              <span className="text-violet">RBAC: ENABLED</span>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[10px] text-cool-silver/70 relative select-none">
            {/* Git Analytics Wireframe */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Activity className="w-3.5 h-3.5" />
                <span>GIT_TELEMETRY // DEVPULSE</span>
              </span>
              <span className="text-cool-silver">BRANCH: main</span>
            </div>

            <div className="my-auto py-2">
              <div className="flex items-center justify-between text-[9px] mb-1.5">
                <span>COMMIT_HEALTH_INDEX</span>
                <span className="text-alabaster font-bold">94.8 / 100</span>
              </div>
              <div className="flex gap-1 h-5 items-end">
                {[40, 65, 80, 50, 95, 75, 90, 60, 85, 100, 70, 95].map((val, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-emerald-500/40 hover:bg-emerald-400 rounded-t transition-all"
                    style={{ height: `${val}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[9px]">
              <span className="text-cool-silver">AUTO_AUDIT: PASS</span>
              <span className="text-emerald-400">42 COMMITS ANALYZED</span>
            </div>
          </div>
        );

      case 'database':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[10px] text-cool-silver/70 relative select-none">
            {/* Database Explorer Wireframe */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Database className="w-3.5 h-3.5" />
                <span>SQL_SCHEMA_OPTIMIZER</span>
              </span>
              <span className="text-emerald-400">INDEX: B-TREE</span>
            </div>

            <div className="my-auto py-2 space-y-1 text-[9px]">
              <div className="p-1 rounded bg-black/40 border border-white/[0.05] text-cool-silver flex justify-between">
                <span>SELECT * FROM routes WHERE safety &gt; 90</span>
                <span className="text-emerald-400">1.2ms</span>
              </div>
              <div className="p-1 rounded bg-black/40 border border-white/[0.05] text-cool-silver flex justify-between">
                <span>JOIN incidents ON routes.id = incidents.ref</span>
                <span className="text-emerald-400">0.8ms</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[9px]">
              <span className="text-cool-silver">PLAN: EXPLAIN ANALYZE</span>
              <span className="text-amber-400">COST: 0.04</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-smoked-onyx hover:bg-carbon-slate/85 transition-all duration-300 border-b hairline-border last:border-b-0 overflow-hidden"
      style={{
        transform: isHovered ? 'perspective(1000px) rotateX(1deg) translateY(-2px)' : 'none',
      }}
    >
      {/* Dynamic Left Accent Bar (Illuminates tech green on hover) */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 ${
          isHovered
            ? 'bg-gradient-to-b from-emerald-400 via-teal-400 to-green-500 opacity-100 shadow-[0_0_15px_rgba(16,185,129,0.8)]'
            : 'bg-transparent opacity-0'
        }`}
      />

      <div className="p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Info Column */}
          <div className="lg:col-span-7 space-y-5">
            {/* Top metadata line */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-sm sm:text-base font-bold text-emerald-400 tracking-wider">
                [{project.index}]
              </span>
              <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-carbon-slate border hairline-border text-cool-silver uppercase tracking-wider">
                {project.category}
              </span>
              <span className="font-mono text-xs text-emerald-400/90 flex items-center gap-1.5 ml-auto sm:ml-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {project.status}
              </span>
            </div>

            {/* Project Title */}
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-alabaster group-hover:text-emerald-400 transition-colors duration-200">
                {project.name}
              </h3>
              <p className="font-sans text-sm sm:text-base text-cool-silver/90 mt-1 font-normal">
                {project.tagline}
              </p>
            </div>

            {/* Project Detailed Description */}
            <p className="font-sans text-sm sm:text-base text-cool-silver leading-relaxed max-w-2xl">
              {project.description}
            </p>

            {/* Key Architectural Highlights */}
            <div className="space-y-1.5 pt-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-mono text-cool-silver/80">
                  <span className="text-emerald-400">&gt;</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-1 rounded bg-obsidian border hairline-border text-cool-silver group-hover:border-emerald-500/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.06]">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-carbon-slate hover:bg-carbon-slate/80 text-alabaster border hairline-border hover:border-emerald-500/50 font-mono text-xs uppercase tracking-wider transition-all duration-200 group/btn"
                aria-label={`View ${project.name} on GitHub`}
              >
                <GitHubIcon className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:scale-110 transition-transform" />
                <span>View on GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-cool-silver group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cool-silver hover:text-alabaster transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Interactive Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Architectural Wireframe Preview Card (Right Column) */}
          <div className="lg:col-span-5">
            <div className="w-full h-56 sm:h-64 rounded-lg bg-obsidian/95 border hairline-border overflow-hidden relative shadow-inner group-hover:border-emerald-500/40 transition-all duration-300">
              {/* Subtle top frame bar */}
              <div className="h-6 px-3 bg-carbon-slate/60 border-b border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/70" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
                </div>
                <span className="font-mono text-[9px] text-cool-silver/60">
                  ARCH_SPEC // WIREFRAME_VIEW
                </span>
              </div>

              {/* Wireframe content */}
              <div className="h-[calc(100%-24px)] drafting-subgrid-pattern">
                {renderWireframePreview()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
