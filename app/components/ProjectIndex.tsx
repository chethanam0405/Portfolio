'use client';

import React from 'react';
import ProjectCard, { ProjectItem } from './ProjectCard';
import { Layers, FolderGit2, Sparkles, ExternalLink } from 'lucide-react';

export default function ProjectIndex() {
  const projects: ProjectItem[] = [
    {
      id: 'navisafe',
      index: '01',
      name: 'Navisafe',
      tagline: 'Optimised Route Navigation & Safety Mitigation Engine',
      description:
        'A comprehensive route optimization application engineered to calculate safest-path navigation. Integrates algorithmic graph traversal (Dijkstra / A* heuristic), real-time safety indices, road hazard alerts, and dynamic detour recalculations to protect commuters.',
      category: 'ALGORITHMS & NAVIGATION',
      techStack: ['Python', 'React', 'SQL', 'Algorithms', 'Leaflet API'],
      githubUrl: 'https://github.com/chethanam/navisafe',
      status: 'PRODUCTION READY',
      highlights: [
        'Custom multi-factor cost function factoring distance, illumination, and incident frequency',
        'Sub-20ms route recalculation with dynamic obstacle and hazard rerouting',
        'Clean responsive client dashboard with interactive vector maps and turn-by-turn alerts',
      ],
      wireframeType: 'navigation',
    },
    {
      id: 'saas-forge',
      index: '02',
      name: 'SaaSForge & Aura Suite',
      tagline: 'Modern Multi-Tenant Micro-SaaS Platform Architecture',
      description:
        'A production-grade SaaS starter and utility infrastructure tailored for rapid product launches. Features tenant isolation, recurring billing workflows, role-based permission tiers (RBAC), usage metering, and real-time operational analytics.',
      category: 'SAAS & CLOUD SYSTEMS',
      techStack: ['React', 'Next.js', 'Python', 'SQL', 'Micro-SaaS Architecture'],
      githubUrl: 'https://github.com/chethanam/saas-forge',
      status: 'ACTIVE DEVELOPMENT',
      highlights: [
        'Secure multi-tenant schema partitioning with automated data segregation',
        'Interactive administrative telemetrics with MRR, churn, and user engagement monitoring',
        'Modular webhook pipeline for automated provisioning and event notification',
      ],
      wireframeType: 'saas',
    },
    {
      id: 'devpulse',
      index: '03',
      name: 'DevPulse Git Intelligence',
      tagline: 'Automated Developer Workflow & Repository Telemetry',
      description:
        'An automated engineering telemetry tool that audits Git repositories for commit cadence, code churn velocity, branch health, and team collaboration patterns to reduce bottlenecks.',
      category: 'DEVELOPER UTILITIES',
      techStack: ['Python', 'SQL', 'Git', 'GitHub API', 'Data Analytics'],
      githubUrl: 'https://github.com/chethanam/devpulse-git',
      status: 'OPEN SOURCE',
      highlights: [
        'Automated static commit parsing and dependency graph relationship tracking',
        'Actionable health scores comparing PR turnaround against peer benchmarks',
        'Seamless integration with GitHub webhook endpoints and CLI reports',
      ],
      wireframeType: 'analytics',
    },
    {
      id: 'cloudvault-db',
      index: '04',
      name: 'CloudVault SQL Explorer',
      tagline: 'Relational Database Schema Visualizer & Query Profiler',
      description:
        'A developer-first SQL schema inspection engine and query performance profiler. Generates interactive entity relationship diagrams (ERDs) and offers automated indexing suggestions for complex queries.',
      category: 'DATABASE & TOOLS',
      techStack: ['SQL', 'Python', 'React', 'TypeScript', 'Schema Visualizer'],
      githubUrl: 'https://github.com/chethanam/cloudvault-db',
      status: 'BETA RELEASE',
      highlights: [
        'Real-time SQL query execution plan visualization (EXPLAIN / ANALYZE)',
        'Automated indexing suggestions for slow JOIN and nested query patterns',
        'Exportable schema definitions with migration rollback simulation',
      ],
      wireframeType: 'database',
    },
  ];

  return (
    <section id="projects" className="relative py-24 sm:py-32 border-b hairline-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 tracking-widest uppercase mb-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
              <span>03 // FEATURED WORK &amp; SYSTEMS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tightDisplay text-alabaster">
              Selected Projects
            </h2>
          </div>
          <div className="text-left sm:text-right">
            <p className="font-mono text-xs text-cool-silver">
              ARCHITECTURE INDEX // 04 IMPLEMENTATIONS
            </p>
            <p className="font-sans text-xs text-cool-silver/80 mt-1">
              Navisafe &bull; SaaS Products &bull; Engineering Tools
            </p>
          </div>
        </div>

        {/* Full-bleed Numbered Rows Container */}
        <div className="border hairline-border rounded-xl overflow-hidden shadow-2xl bg-obsidian">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub Repositories Link CTA */}
        <div className="mt-12 p-6 rounded-lg bg-smoked-onyx border hairline-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-carbon-slate border hairline-border text-emerald-400">
              <FolderGit2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-sans text-sm font-semibold text-alabaster">
                Explore more source repositories
              </h4>
              <p className="font-sans text-xs text-cool-silver">
                Check out algorithmic experiments, web demos, and coursework utilities on GitHub.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/chethanam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-carbon-slate hover:bg-carbon-slate/80 text-alabaster border hairline-border hover:border-emerald-500/50 font-mono text-xs uppercase tracking-wider transition-all duration-200"
          >
            <span>Browse GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
