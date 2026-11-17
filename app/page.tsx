import React from 'react';
import DraftingBackground from './components/DraftingBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CapabilitiesMatrix from './components/CapabilitiesMatrix';
import ProjectIndex from './components/ProjectIndex';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-obsidian text-alabaster selection:bg-emerald-500/30 selection:text-alabaster font-sans">
      {/* Interactive Architectural Drafting Grid & Caustic Beams */}
      <DraftingBackground />

      {/* Main Foreground Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* 1. Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 2. Hero Section */}
          <Hero />

          {/* 3. About Section (Bio + Skills Chips) */}
          <About />

          {/* Architectural Capabilities Matrix (3-Column Hairline Grid) */}
          <CapabilitiesMatrix />

          {/* 4. Projects Section (Reusable ProjectCard & 3D Hover Rows) */}
          <ProjectIndex />

          {/* 5. Contact Section (Form + Email + Social Channels) */}
          <Contact />
        </main>

        {/* 6. Footer Section (Live Clock & Colophon) */}
        <Footer />
      </div>
    </div>
  );
}
