import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Cpu } from 'lucide-react';
import { GlyphLogo } from './GlyphLogo';

export const Navbar: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyInstallCmd = () => {
    navigator.clipboard.writeText('npm install -g rz-glyph-cli');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0d14]/90 backdrop-blur-xl border-b border-[#232a3b] overflow-hidden">
      {/* Top Left Glowing Light Accent */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative z-10">
        {/* Brand Logo & Top-Left Status Box */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-3 p-1.5 px-3 rounded-lg bg-[#121722]/80 border border-[#232a3b] hover:border-cyan-500/40 transition-all shadow-lg group">
            <GlyphLogo size={28} glow />
            <div className="flex items-center gap-2">
              <span className="font-mono-code font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">glyph</span>
              <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded bg-cyan-950/90 border border-cyan-800/60 text-cyan-400 font-bold">
                v1.4.2
              </span>
            </div>
          </a>

          {/* Top-Left Compiler Engine Status Tag */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#121722] border border-[#232a3b] text-xs font-mono-code text-slate-400">
            <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Next.js 16 Compiler Engine</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#pipeline" className="hover:text-cyan-400 transition-colors">Pipeline</a>
          <a href="#editor" className="hover:text-cyan-400 transition-colors">Live Editor</a>
          <a href="#performance" className="hover:text-cyan-400 transition-colors">Performance</a>
          <a href="#architecture" className="hover:text-cyan-400 transition-colors">Architecture</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={copyInstallCmd}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#121722] border border-[#232a3b] hover:border-cyan-500/50 text-xs font-mono-code text-slate-300 transition-all shadow-md"
            title="Copy install command"
          >
            <span className="text-cyan-400">$</span>
            <span>npm i -g rz-glyph-cli</span>
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500 hover:text-slate-300" />}
          </button>

          <a
            href="https://github.com/google/agents-cli"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-cyan-950/50 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 text-xs font-mono-code tracking-wide transition-all shadow-md"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-cyan-500" />
          </a>
        </div>
      </div>
    </header>
  );
};
