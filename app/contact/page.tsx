'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MapPin, Terminal } from 'lucide-react';
import { personalInfo } from '@/data/resumeData';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from '@/components/SocialIcons';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    }, 600);
  };

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
      
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121215] border border-[#27272a] text-xs font-mono text-emerald-400">
          <Terminal className="w-3.5 h-3.5" />
          <span>Contact</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Connect with Smriti Priya Singh
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Open to security analyst opportunities, project discussions, or research inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Direct Info */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-[#121215] border border-[#27272a] space-y-4 text-xs">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>Direct Contact</span>
            </h2>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 space-y-0.5">
                <span className="text-[10px] font-mono text-zinc-500 block">Email Address</span>
                <a href={`mailto:${personalInfo.email}`} className="font-medium text-zinc-200 hover:text-emerald-400 transition-colors">
                  {personalInfo.email}
                </a>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 space-y-0.5">
                <span className="text-[10px] font-mono text-zinc-500 block">Location</span>
                <span className="font-medium text-zinc-200">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#121215] border border-[#27272a] space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Social Profiles</h3>
            <div className="flex gap-2">
              <a
                href={personalInfo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-red-500/40 text-zinc-300 hover:text-red-400 transition-colors"
                aria-label="YouTube Channel"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="md:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-[#27272a] space-y-4">
            <h2 className="text-base font-bold text-white">Send a Message</h2>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto" />
                <h3 className="text-sm font-bold text-white">Message Transmitted</h3>
                <p className="text-xs text-zinc-400">Thank you for reaching out! Smriti will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="text-zinc-400 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-zinc-600"
                  />
                </div>

                <div>
                  <label className="text-zinc-400 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-zinc-600"
                  />
                </div>

                <div>
                  <label className="text-zinc-400 block mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-zinc-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-colors disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? 'Transmitting...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
