'use client';

import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, Phone, MapPin, Terminal } from 'lucide-react';
import { personalInfo } from '@/data/resumeData';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from '@/components/SocialIcons';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Security Opportunity',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
          <Terminal className="w-3.5 h-3.5" />
          <span>Contact Smriti Priya Singh</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Get in Touch
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Open to roles combining threat detection, incident response, SOC operations, and offensive security testing. Reach out directly or send a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-5">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Direct Contact Details</span>
            </h2>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
                <Mail className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="font-semibold text-slate-200 hover:text-cyan-300 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
                <Phone className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Phone</span>
                  <a href={`tel:${personalInfo.phone}`} className="font-semibold text-slate-200 hover:text-cyan-300 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Location</span>
                  <span className="font-semibold text-slate-200">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Platforms */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Profiles & Media Channels
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              <a
                href={personalInfo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-red-500/40 text-xs text-slate-300 hover:text-white transition-all"
              >
                <div className="flex items-center gap-3">
                  <YoutubeIcon className="w-4 h-4 text-red-400" />
                  <span>YouTube Channel</span>
                </div>
                <span className="font-mono text-slate-400">{personalInfo.youtubeHandle}</span>
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 text-xs text-slate-300 hover:text-white transition-all"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>GitHub Profile</span>
                </div>
                <span className="font-mono text-slate-400">@SmritiPriyaSingh</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 text-xs text-slate-300 hover:text-white transition-all"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn Network</span>
                </div>
                <span className="font-mono text-slate-400">Smriti Priya Singh</span>
              </a>
            </div>
          </div>

        </div>

        {/* Message Form */}
        <div className="lg:col-span-7">
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Send a Direct Message</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Fill in the form below to reach out for security analyst opportunities, project discussions, or research inquiries.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white">Message Delivered</h3>
                <p className="text-xs text-slate-300">
                  Thank you for getting in touch! Smriti will get back to you shortly at your provided email.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', topic: 'Security Opportunity', message: '' });
                  }}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-xs font-mono text-cyan-400 hover:bg-slate-700 transition-colors mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hiring Manager / Security Lead"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Subject / Topic</label>
                  <select
                    value={formData.topic}
                    aria-label="Subject / Topic"
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Security Opportunity">Security Analyst Role / Opportunity</option>
                    <option value="Project Collaboration">Cybersecurity Project Collaboration</option>
                    <option value="TechEthix Inquiry">TechEthix Channel Inquiry</option>
                    <option value="General Inquiry">General Question</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Write your message or inquiry here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-xs hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20 disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
                </button>

              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
