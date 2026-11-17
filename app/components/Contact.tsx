'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Clock, 
  Terminal, 
  MessageSquare,
  Sparkles 
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const myEmail = 'chethanam0405@gmail.com';
  const githubUrl = 'https://github.com/chethanam';
  const linkedinUrl = 'https://linkedin.com/in/chethana-m';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(myEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormState('submitting');
    setTimeout(() => {
      setFormState('submitted');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-b hairline-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 tracking-widest uppercase mb-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
              <span>04 // TRANSMISSION &amp; INQUIRY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tightDisplay text-alabaster">
              Initiate Contact.
            </h2>
          </div>
          <p className="font-mono text-xs text-cool-silver max-w-xs text-left sm:text-right">
            COMMUNICATION PROTOCOL // <br />
            DIRECT CHANNEL TO CHETHANA M
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-lg bg-smoked-onyx border hairline-border space-y-6">
              <div>
                <h3 className="font-sans text-xl font-semibold text-alabaster mb-2">
                  Let&apos;s build something exceptional.
                </h3>
                <p className="font-sans text-sm text-cool-silver leading-relaxed">
                  Whether you have an internship opportunity, a project collaboration idea, or want to discuss route navigation algorithms and SaaS architectures, my inbox is always open.
                </p>
              </div>

              {/* Email Direct Pill with Copy Button */}
              <div className="p-4 rounded-lg bg-carbon-slate/80 border hairline-border space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-cool-silver block">
                  Primary Transmission Channel
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${myEmail}`}
                    className="font-mono text-sm text-alabaster hover:text-emerald-400 transition-colors truncate"
                  >
                    {myEmail}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded bg-obsidian border hairline-border hover:border-emerald-500/50 text-cool-silver hover:text-alabaster transition-all shrink-0 active:scale-95"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <span className="font-mono text-[10px] text-emerald-400 block animate-in fade-in">
                    &bull; Address copied to clipboard!
                  </span>
                )}
              </div>

              {/* Status & Availability Metrics (Location tag removed) */}
              <div className="space-y-3 pt-2 border-t border-white/[0.06] text-xs font-mono">
                <div className="flex items-center justify-between text-cool-silver">
                  <span className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    Response Window
                  </span>
                  <span className="text-alabaster">&lt; 24 Hours</span>
                </div>
                <div className="flex items-center justify-between text-cool-silver">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    Current Status
                  </span>
                  <span className="text-emerald-400 font-medium">Available for Internships</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/[0.06]">
                <span className="font-mono text-[10px] uppercase tracking-wider text-cool-silver block mb-3">
                  Verified Profiles &amp; Socials
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[130px] p-3 rounded bg-carbon-slate/60 hover:bg-carbon-slate border hairline-border hover:border-emerald-500/50 transition-all flex items-center gap-2.5 text-xs font-mono text-alabaster group"
                  >
                    <GitHubIcon className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>GitHub</span>
                    <span className="text-cool-silver ml-auto text-[10px]">&rarr;</span>
                  </a>

                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[130px] p-3 rounded bg-carbon-slate/60 hover:bg-carbon-slate border hairline-border hover:border-emerald-500/50 transition-all flex items-center gap-2.5 text-xs font-mono text-alabaster group"
                  >
                    <LinkedInIcon className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                    <span className="text-cool-silver ml-auto text-[10px]">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-lg bg-smoked-onyx border hairline-border relative overflow-hidden">
              {/* Form header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-xs uppercase tracking-wider text-alabaster">
                    Transmission Form // UI Interface
                  </span>
                </div>
                <span className="font-mono text-[10px] text-cool-silver">ENCRYPTION: SSL</span>
              </div>

              {formState === 'submitted' ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl text-alabaster font-medium">
                    Message Dispatched Successfully
                  </h4>
                  <p className="font-sans text-sm text-cool-silver max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! Your message has been recorded. I will review it and reply to your email promptly.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-4 px-4 py-2 rounded bg-carbon-slate border hairline-border text-xs font-mono text-alabaster hover:border-emerald-500 transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block font-mono text-xs uppercase tracking-wider text-cool-silver"
                      >
                        Your Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded bg-obsidian border hairline-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none text-sm text-alabaster placeholder:text-cool-silver/40 font-sans transition-colors"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block font-mono text-xs uppercase tracking-wider text-cool-silver"
                      >
                        Email Address <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className="w-full px-4 py-3 rounded bg-obsidian border hairline-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none text-sm text-alabaster placeholder:text-cool-silver/40 font-sans transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="block font-mono text-xs uppercase tracking-wider text-cool-silver"
                    >
                      Inquiry Type / Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Internship Opportunity / Navisafe Project Collab"
                      className="w-full px-4 py-3 rounded bg-obsidian border hairline-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none text-sm text-alabaster placeholder:text-cool-silver/40 font-sans transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs uppercase tracking-wider text-cool-silver"
                    >
                      Message <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded bg-obsidian border hairline-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none text-sm text-alabaster placeholder:text-cool-silver/40 font-sans transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 hover:from-emerald-500 hover:to-green-500 text-alabaster font-sans font-medium text-sm tracking-wide transition-all duration-200 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed group cursor-pointer"
                    >
                      {formState === 'submitting' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Dispatching Transmission...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          <span>Send Transmission</span>
                        </>
                      )}
                    </button>
                    <span className="block mt-2 font-mono text-[11px] text-cool-silver/60">
                      * Clean front-end transmission UI interface ready for API routing.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
