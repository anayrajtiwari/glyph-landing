import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Rocket, Bell } from 'lucide-react';
import { GlyphLogo } from './GlyphLogo';

export const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <section id="coming-soon" className="py-28 bg-[#0a0d14] border-t border-[#232a3b] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-950/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl border border-cyan-500/40 bg-[#121722]/90 backdrop-blur-2xl p-8 md:p-14 shadow-2xl space-y-8 text-center relative overflow-hidden"
        >
          {/* Top Decorative Vector Arc */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {/* Icon Badge */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-[#0a0d14] border border-cyan-500/40 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <GlyphLogo size={36} glow />
            </div>
          </div>

          {/* Content Headings */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono-code">
              <Rocket className="w-3.5 h-3.5 animate-pulse" />
              <span>GLYPH V2.0 CLOUD ENGINE • ROADMAP</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">
              Glyph v2.0 &amp; WASM Engine <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-orange-400">
                Coming Soon
              </span>
            </h2>

            <p className="text-slate-400 text-base font-light leading-relaxed">
              Native WebAssembly browser compilation target, real-time multi-user spec editing, and one-click edge deployment to Vercel and Netlify.
            </p>
          </div>

          {/* Waitlist Email Input Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <div className="flex items-center p-1.5 rounded-xl bg-[#0a0d14] border border-[#232a3b] focus-within:border-cyan-500/60 transition-all shadow-xl">
              <input
                type="email"
                required
                placeholder="Enter your developer email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-transparent text-slate-100 text-sm font-mono-code placeholder:text-slate-600 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#0a0d14] font-mono-code font-bold text-xs tracking-wide flex items-center gap-2 transition-all flex-shrink-0 shadow-md shadow-cyan-500/20"
              >
                {subscribed ? (
                  <>
                    <Check className="w-4 h-4 text-slate-950" />
                    <span>Joined!</span>
                  </>
                ) : (
                  <>
                    <Bell className="w-4 h-4" />
                    <span>Notify Me</span>
                  </>
                )}
              </button>
            </div>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-mono-code text-emerald-400"
              >
                ✓ You are on the early access list for Glyph v2.0!
              </motion.p>
            )}
          </form>

          {/* Upcoming Feature Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs font-mono-code text-slate-400">
            <div className="p-3 rounded-lg bg-[#0a0d14] border border-[#232a3b]">
              <span className="text-cyan-400 font-bold">WebAssembly Target</span>
              <p className="text-[11px] text-slate-500 pt-1">Client-side browser WASM build target</p>
            </div>

            <div className="p-3 rounded-lg bg-[#0a0d14] border border-[#232a3b]">
              <span className="text-emerald-400 font-bold">Collab Spec Editor</span>
              <p className="text-[11px] text-slate-500 pt-1">CRDT-based real-time spec editing</p>
            </div>

            <div className="p-3 rounded-lg bg-[#0a0d14] border border-[#232a3b]">
              <span className="text-orange-400 font-bold">One-Click Edge Deploy</span>
              <p className="text-[11px] text-slate-500 pt-1">Direct Cloudflare &amp; Vercel deployment</p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
