import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GlyphLogo } from './GlyphLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0a0d14] border-t border-[#232a3b] py-12">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <GlyphLogo size={24} />
              <span className="font-mono-code font-bold text-slate-100 text-lg">rzglyph-compiler</span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm font-light">
              Deterministic Next-Generation Frontend Documentation &amp; Web Spec Compiler.
            </p>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#121722] border border-[#232a3b] text-xs font-mono-code">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400">Compiler Status:</span>
            <span className="text-emerald-400 font-bold">Operational (100%)</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#232a3b] pt-8 text-xs font-mono-code text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} rzglyph Compiler Engine. Open-source under MIT/ISC License.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/google/agents-cli" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="#pipeline" className="hover:text-cyan-400 transition-colors">Pipeline</a>
            <a href="#editor" className="hover:text-cyan-400 transition-colors">Live Demo</a>
            <a href="#performance" className="hover:text-cyan-400 transition-colors">Benchmarks</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
