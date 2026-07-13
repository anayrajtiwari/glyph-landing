import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, Download, BookOpen, Check, Cpu, Layers, Terminal as TerminalIcon, ShieldCheck, Zap, Server } from 'lucide-react';
import { GlyphLogo } from './GlyphLogo';

export const HeroCompiler: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [typedText, setTypedText] = useState('');
  const fullCommand = 'glyph build';

  useEffect(() => {
    const timer1 = setTimeout(() => {
      let currentLength = 0;
      const typeInterval = setInterval(() => {
        if (currentLength <= fullCommand.length) {
          setTypedText(fullCommand.slice(0, currentLength));
          currentLength++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setStep(2), 500);
        }
      }, 70);
    }, 400);

    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    if (step === 2) {
      const timer = setTimeout(() => setStep(3), 900);
      return () => clearTimeout(timer);
    } else if (step === 3) {
      const timer = setTimeout(() => setStep(4), 1100);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const restartDemo = () => {
    setStep(0);
    setTypedText('');
    setTimeout(() => {
      let currentLength = 0;
      const typeInterval = setInterval(() => {
        if (currentLength <= fullCommand.length) {
          setTypedText(fullCommand.slice(0, currentLength));
          currentLength++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setStep(2), 400);
        }
      }, 60);
    }, 200);
  };

  return (
    <section className="relative min-h-[120vh] bg-[#0a0d14] grid-pattern flex flex-col items-center justify-center px-6 py-24 md:py-36 overflow-hidden border-b border-[#232a3b]">
      {/* Top-Left Ambient Light Glow Sphere */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-[550px] h-[550px] bg-cyan-500/20 rounded-full blur-[160px] pointer-events-none"
      />

      {/* Top-Right & Center Background Glow Spheres */}
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/4 w-[550px] h-[550px] bg-orange-500/15 rounded-full blur-[160px] pointer-events-none"
      />

      {/* Compiler Live Execution Interactive Terminal Window */}
      <div className="w-full max-w-5xl mx-auto mb-16 relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          className="relative rounded-xl border border-[#232a3b] bg-[#121722]/95 backdrop-blur-2xl shadow-2xl overflow-hidden"
        >
          {/* Top Terminal Bar */}
          <div className="px-5 py-3.5 bg-[#0a0d14] border-b border-[#232a3b] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-xs font-mono-code text-slate-400 flex items-center gap-2">
                <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                glyph-compiler v1.4.2 — compilation-pipeline
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[11px] font-mono-code text-cyan-400 font-semibold tracking-wider">
                {step === 0 && 'STATUS: IDLE'}
                {step === 1 && 'STATUS: TYPING'}
                {step === 2 && 'STATUS: LEXING AST (< 2ms)'}
                {step === 3 && 'STATUS: SYNTHESIZING COMPONENTS'}
                {step === 4 && 'STATUS: COMPILED READY (< 8ms)'}
              </span>
              <button
                onClick={restartDemo}
                className="p-1.5 rounded bg-[#181e2b] hover:bg-[#232a3b] text-slate-400 hover:text-cyan-400 transition-colors"
                title="Replay Compiler Pipeline"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Progress Indicator Pulse Bar */}
          <div className="w-full h-0.5 bg-[#181e2b]">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-orange-400"
              initial={{ width: '0%' }}
              animate={{
                width: step === 0 ? '0%' : step === 1 ? '25%' : step === 2 ? '50%' : step === 3 ? '75%' : '100%'
              }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Dynamic Stage Screen */}
          <div className="p-8 min-h-[420px] flex flex-col justify-center relative">
            <AnimatePresence mode="wait">
              
              {/* STAGE 0 & 1: Command Typing */}
              {step < 2 && (
                <motion.div
                  key="stage-0-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 font-mono-code text-base"
                >
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-emerald-400">dev@glyph-compiler</span>
                    <span className="text-slate-600">:</span>
                    <span className="text-cyan-400">~/project</span>
                    <span className="text-slate-500">$</span>
                    <span className="text-slate-100 font-bold text-lg">{typedText}</span>
                    <span className="cursor-blink text-cyan-400 font-bold" />
                  </div>
                  {step === 1 && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-slate-500 italic pt-3"
                    >
                      [Info] Compiling docs/spec.md into standalone Next.js 16/26 frontend target...
                    </motion.p>
                  )}
                </motion.div>
              )}

              {/* STAGE 2: Lexing AST Parsing */}
              {step === 2 && (
                <motion.div
                  key="stage-2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 font-mono-code"
                >
                  <div className="flex items-center gap-2 text-xs text-cyan-400 border-b border-cyan-950/60 pb-2">
                    <Cpu className="w-4 h-4 animate-pulse" />
                    <span>PARSING MARKDOWN SPECIFICATION INTO ABSTRACT SYNTAX TREE</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="p-5 rounded bg-[#0a0d14] border border-[#232a3b] text-slate-300 space-y-2"
                    >
                      <div className="text-orange-400 font-bold text-sm"># Input Spec (docs/index.md)</div>
                      <div className="text-slate-400">--- title: &quot;Glyph Engine&quot; ---</div>
                      <div className="text-emerald-400"># Next-Gen Compiler</div>
                      <div className="text-cyan-300">```tsx [HeaderComponent]</div>
                      <div className="text-slate-500">export function Header() &#123; ... &#125;</div>
                    </motion.div>

                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.15 }}
                      className="p-5 rounded bg-[#0a0d14] border border-[#232a3b] text-slate-300 space-y-2"
                    >
                      <div className="text-cyan-400 font-bold text-sm"># Unified AST IR Output</div>
                      <div className="text-slate-400">AST_Program &#123; routes: 3, components: 4 &#125;</div>
                      <div className="text-emerald-400">IR_Lowerer :: Synthesizing Next.js 16/26</div>
                      <div className="text-orange-300">Emitting x86-64 / React 19 / Tailwind v4...</div>
                      <div className="text-slate-500">Target: Next.js 16/26 App Router</div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* STAGE 3: Component Morphing */}
              {step === 3 && (
                <motion.div
                  key="stage-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2 text-xs font-mono-code text-orange-400 border-b border-orange-950/60 pb-2">
                    <Layers className="w-4 h-4 animate-bounce" />
                    <span>MORPHING TEXT TO REACT COMPONENTS &amp; LAYOUT FRAMES</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                      className="p-6 rounded-lg bg-[#0a0d14] border border-cyan-500/40 text-center space-y-3 shadow-lg"
                    >
                      <div className="h-4 bg-cyan-950 rounded w-3/4 mx-auto animate-pulse" />
                      <div className="h-3 bg-slate-800 rounded w-1/2 mx-auto" />
                      <span className="text-[11px] font-mono-code text-cyan-400 block">HeaderComponent.tsx</span>
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="p-6 rounded-lg bg-[#0a0d14] border border-emerald-500/40 text-center space-y-3 shadow-lg"
                    >
                      <div className="h-4 bg-emerald-950 rounded w-3/4 mx-auto animate-pulse" />
                      <div className="h-3 bg-slate-800 rounded w-1/2 mx-auto" />
                      <span className="text-[11px] font-mono-code text-emerald-400 block">FeatureGrid.tsx</span>
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      className="p-6 rounded-lg bg-[#0a0d14] border border-orange-500/40 text-center space-y-3 shadow-lg"
                    >
                      <div className="h-4 bg-orange-950 rounded w-3/4 mx-auto animate-pulse" />
                      <div className="h-3 bg-slate-800 rounded w-1/2 mx-auto" />
                      <span className="text-[11px] font-mono-code text-orange-400 block">InteractiveConsole.tsx</span>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* STAGE 4: Final Rendered Website Slide Forward */}
              {step === 4 && (
                <motion.div
                  key="stage-4"
                  initial={{ scale: 0.88, opacity: 0, y: 30 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-lg border border-cyan-500/50 bg-[#0a0d14] p-8 shadow-2xl space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-[#232a3b] pb-4">
                    <div className="flex items-center gap-3">
                      <GlyphLogo size={28} glow />
                      <span className="font-bold text-base text-slate-100">Glyph Compiled Preview</span>
                    </div>
                    <span className="text-xs font-mono-code text-emerald-400 flex items-center gap-1 font-semibold">
                      <Check className="w-4 h-4" /> Compiled in 7.4ms
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <span className="text-xs font-mono-code text-orange-400 uppercase tracking-widest px-2.5 py-1 rounded bg-orange-950/60 border border-orange-800/40">
                        Zero-JS Hydration
                      </span>
                      <h4 className="text-3xl font-bold tracking-tight text-white">
                        Next.js 16/26 Markdown Compiler
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed font-light">
                        Transforming raw documentation specs into Next.js 16/26 frontend interfaces with React 19, Tailwind v4, and native client-side search.
                      </p>
                    </div>
                    <div className="p-5 rounded-lg bg-[#121722] border border-[#232a3b] space-y-3 text-xs font-mono-code">
                      <div className="flex justify-between text-slate-400">
                        <span>Target Framework:</span>
                        <span className="text-cyan-400 font-bold">Next.js 16 / React 19</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Bundle Size:</span>
                        <span className="text-emerald-400 font-bold">0 KB Overhead</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Compilation Speed:</span>
                        <span className="text-orange-400 font-bold">&lt; 10ms Build</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </motion.div>

        {/* Live Execution Architecture Banner Bar Below Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono-code text-xs"
        >
          <div className="p-4 rounded-lg bg-[#121722] border border-[#232a3b] flex items-center gap-3">
            <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <div>
              <div className="text-slate-200 font-bold">Single-Pass Lexer</div>
              <div className="text-slate-500 text-[11px]">Direct AST parsing in &lt; 2ms</div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[#121722] border border-[#232a3b] flex items-center gap-3">
            <Server className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div>
              <div className="text-slate-200 font-bold">Next.js 16/26 Engine</div>
              <div className="text-slate-500 text-[11px]">Emits Next.js 16/26 + React 19</div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[#121722] border border-[#232a3b] flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-orange-400 flex-shrink-0" />
            <div>
              <div className="text-slate-200 font-bold">Zero Dependency</div>
              <div className="text-slate-500 text-[11px]">No external cloud JS runtimes</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Headline & Subheadline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="max-w-4xl mx-auto text-center space-y-8 z-10 pt-6"
      >
        <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-none text-slate-100">
          Build Beautiful Websites <br />
          <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-orange-400">
            From Markdown
          </span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          A deterministic compiler that transforms documentation into production-ready frontend experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#install"
            className="px-8 py-4 rounded-md bg-cyan-500 hover:bg-cyan-400 text-[#0a0d14] font-mono-code font-bold text-sm tracking-wide flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/25"
          >
            <Download className="w-4 h-4" />
            <span>Download CLI</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#editor"
            className="px-8 py-4 rounded-md bg-[#121722] hover:bg-[#181e2b] border border-[#232a3b] hover:border-cyan-500/40 text-slate-200 font-mono-code text-sm tracking-wide flex items-center gap-2 transition-all"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Documentation</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/google/agents-cli"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-md bg-[#121722] hover:bg-[#181e2b] border border-[#232a3b] hover:border-slate-500 text-slate-300 font-mono-code text-sm tracking-wide flex items-center gap-2 transition-all"
          >
            <svg className="w-4 h-4 fill-current text-slate-400" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            <span>GitHub</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};
