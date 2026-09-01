import React, { useState } from 'react';
import { Terminal, Copy, Check, TerminalSquare } from 'lucide-react';

export const DeveloperExperience: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const installCmd = 'npm install -g rz-glyph-cli';

  const copyCmd = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="install" className="py-24 bg-[#0a0d14] border-t border-[#232a3b] relative">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono-code">
            <TerminalSquare className="w-3.5 h-3.5" />
            <span>DEVELOPER EXPERIENCE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">
            Get Started In Seconds
          </h2>
          <p className="text-slate-400 text-sm font-light">
            Zero external dependencies. Zero complex setups. Fast offline compiler.
          </p>
        </div>

        <div className="p-8 rounded-xl bg-[#121722] border border-[#232a3b] shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-[#232a3b] pb-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono-code text-slate-300">Terminal Installation</span>
            </div>
            <span className="text-xs font-mono-code text-emerald-400">Node.js 18+ / npm</span>
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg bg-[#0a0d14] border border-cyan-500/30 font-mono-code text-sm">
            <div className="flex items-center gap-3">
              <span className="text-cyan-400 font-bold">$</span>
              <span className="text-slate-100">{installCmd}</span>
            </div>
            <button
              onClick={copyCmd}
              className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#181e2b] hover:bg-[#232a3b] text-xs text-slate-300 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono-code text-xs pt-2">
            <div className="p-4 rounded bg-[#0a0d14] border border-[#232a3b] space-y-2">
              <span className="text-cyan-400 font-bold">$ node bin/compiler.js build</span>
              <p className="text-slate-400 font-sans text-xs">Compiles docs/ directory into dist/ static HTML & search bundle.</p>
            </div>

            <div className="p-4 rounded bg-[#0a0d14] border border-[#232a3b] space-y-2">
              <span className="text-emerald-400 font-bold">$ node bin/compiler.js dev 3000</span>
              <p className="text-slate-400 font-sans text-xs">Runs live preview server at localhost:3000 with instant hot-reloading.</p>
            </div>

            <div className="p-4 rounded bg-[#0a0d14] border border-[#232a3b] space-y-2">
              <span className="text-orange-400 font-bold">$ glyph --help</span>
              <p className="text-slate-400 font-sans text-xs">Displays full CLI compiler options and configuration flags.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
