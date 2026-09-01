import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, Code, Eye, Layers, ArrowDown, Sparkles, Cpu, CheckCircle } from 'lucide-react';
import { GlyphLogo } from './GlyphLogo';

export const ScrollPipelineStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const laserHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={containerRef} id="pipeline" className="py-28 relative border-b border-[#232a3b] overflow-hidden transform-gpu">
      {/* Ambient background glow spheres */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 space-y-24 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono-code">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>DYNAMIC COMPILATION PIPELINE</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white">
            From Raw Markdown To Machine Architecture
          </h2>
          
          <p className="text-slate-400 text-base font-light">
            Scroll down to watch the compiler lex Markdown, generate fuzzy search indexes, and emit static HTML developer portals in under 50ms.
          </p>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono-code text-cyan-400">
            <span>Scroll to transform</span>
            <ArrowDown className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
          </div>
        </div>

        {/* Vertical Timeline Container with Scroll-linked Glowing Laser Line */}
        <div className="relative space-y-28">
          
          {/* Static Background Guide Track */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-[#181e2b] rounded-full pointer-events-none" />

          {/* Dynamic Scroll-Linked Laser Beam Line */}
          <motion.div
            style={{ height: laserHeight }}
            className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 w-1 bg-gradient-to-b from-cyan-400 via-emerald-400 to-orange-400 rounded-full shadow-[0_0_15px_#06b6d4] pointer-events-none transform-gpu"
          />

          {/* STAGE 01: Raw Markdown Syntax Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16 transform-gpu"
          >
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0a0d14] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 z-20 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <FileText className="w-5 h-5" />
            </div>

            <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-12 text-left md:text-right space-y-3">
              <span className="text-xs font-mono-code text-cyan-400 font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-800/40">
                Stage 01 • Lexer Engine
              </span>
              <h3 className="text-2xl font-bold text-white">Markdown Syntax Analysis</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Parses raw Markdown document text, frontmatter metadata (`yaml`), code fence headers, and custom layout directives into tokenized streams in under 2ms.
              </p>
            </div>

            <div className="w-full md:w-1/2 pl-16 md:pl-12">
              <div className="p-6 rounded-xl bg-[#121722] border border-cyan-500/40 font-mono-code text-xs space-y-3 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#232a3b] pb-2 text-[11px] text-slate-500">
                  <span className="text-slate-300">docs/spec.md</span>
                  <span className="text-cyan-400 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-400" /> 1,420 TOKENS LEXED
                  </span>
                </div>
                <div className="space-y-1.5 text-slate-300">
                  <p className="text-slate-500">---</p>
                  <p className="text-emerald-400">title: &quot;rzglyph Engine&quot;</p>
                  <p className="text-emerald-400">target: &quot;nextjs-16&quot;</p>
                  <p className="text-slate-500">---</p>
                  <p className="text-cyan-300 font-bold text-base pt-1"># Next-Gen Compiler Spec</p>
                  <p className="text-slate-400 text-[11px]">
                    Deterministic Markdown compiler transforming documentation into React TSX.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* STAGE 02: Morphing Markdown Blocks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 transform-gpu"
          >
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0a0d14] border-2 border-emerald-400 flex items-center justify-center text-emerald-400 z-20 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <Code className="w-5 h-5" />
            </div>

            <div className="w-full md:w-1/2 pl-16 md:pl-12 text-left space-y-3">
              <span className="text-xs font-mono-code text-emerald-400 font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-800/40">
                Stage 02 • IR Lowerer
              </span>
              <h3 className="text-2xl font-bold text-white">Component Morphing &amp; Synthesis</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Converts raw AST document nodes into structured UI elements. Paragraphs become glassmorphic cards, lists become navigation headers, and fenced code blocks become interactive widgets.
              </p>
            </div>

            <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-12">
              <div className="p-6 rounded-xl bg-[#121722] border border-emerald-500/40 font-mono-code text-xs space-y-4 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#232a3b] pb-2 text-[11px] text-slate-500">
                  <span className="text-slate-300">AST Transformer</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <Cpu className="w-3 h-3 text-emerald-400" /> REACT 19 SYNTHESIS
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="p-3.5 rounded bg-[#0a0d14] border border-emerald-500/30 space-y-1">
                    <div className="text-emerald-400 font-bold text-[11px]">[Node Paragraph #4 &rarr; Card]</div>
                    <div className="text-slate-300 text-[11px]">Synthesizing FeatureCard.tsx with zero JS runtime</div>
                  </div>
                  <div className="p-3.5 rounded bg-[#0a0d14] border border-cyan-500/30 space-y-1">
                    <div className="text-cyan-400 font-bold text-[11px]">[Node List #2 &rarr; Nav]</div>
                    <div className="text-slate-300 text-[11px]">Synthesizing Responsive Navbar links</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* STAGE 03: Synthesized Browser View */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16 transform-gpu"
          >
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0a0d14] border-2 border-orange-400 flex items-center justify-center text-orange-400 z-20 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
              <Eye className="w-5 h-5" />
            </div>

            <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-12 text-left md:text-right space-y-3">
              <span className="text-xs font-mono-code text-orange-400 font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-orange-950/60 border border-orange-800/40">
                Stage 03 • Static Output Emitter
              </span>
              <h3 className="text-2xl font-bold text-white">Static Portal Assembly</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Emits production-ready static HTML pages, modular CSS styling, local fuzzy search index bundles, and exportable React TSX components.
              </p>
            </div>

            <div className="w-full md:w-1/2 pl-16 md:pl-12">
              <div className="rounded-xl border border-orange-500/50 bg-[#0a0d14] p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-[#232a3b] pb-3 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="font-mono-code text-slate-400 ml-1">https://rzglyph.shri.org.in</span>
                  </div>
                  <span className="font-mono-code text-orange-400 font-bold">STATIC OUTPUT</span>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white">Glyph Documentation Hub</h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded bg-[#121722] border border-[#232a3b] text-cyan-300 font-mono-code">
                      Static HTML + CSS
                    </div>
                    <div className="p-3 rounded bg-[#121722] border border-[#232a3b] text-emerald-300 font-mono-code">
                      Fuzzy Search Index
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* STAGE 04: 3D Layer Separation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 transform-gpu"
          >
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0a0d14] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 z-20 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <Layers className="w-5 h-5" />
            </div>

            <div className="w-full md:w-1/2 pl-16 md:pl-12 text-left space-y-3">
              <span className="text-xs font-mono-code text-cyan-400 font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-800/40">
                Stage 04 • Architectural Layers
              </span>
              <h3 className="text-2xl font-bold text-white">3D Structural Layer Precision</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Inspect how DOM Render Tree, Intermediate Representation (IR), and Abstract Syntax Tree (AST) stack seamlessly without runtime memory bloat.
              </p>
            </div>

            <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-12">
              <div className="space-y-4 font-mono-code text-xs">
                <div className="p-4.5 rounded-xl bg-[#121722] border border-cyan-500/50 space-y-2 shadow-xl">
                  <div className="flex justify-between text-cyan-400 font-bold">
                    <span>Layer 1: DOM Render Tree</span>
                    <span>100/100 Lighthouse</span>
                  </div>
                  <div className="h-2.5 bg-cyan-500/40 rounded w-full" />
                </div>

                <div className="p-4.5 rounded-xl bg-[#121722] border border-orange-500/50 space-y-2 shadow-xl">
                  <div className="flex justify-between text-orange-400 font-bold">
                    <span>Layer 2: Intermediate IR Code</span>
                    <span>Single Pass Transpile</span>
                  </div>
                  <div className="h-2.5 bg-orange-500/40 rounded w-full" />
                </div>

                <div className="p-4.5 rounded-xl bg-[#121722] border border-emerald-500/50 space-y-2 shadow-xl">
                  <div className="flex justify-between text-emerald-400 font-bold">
                    <span>Layer 3: Abstract Syntax Tree (AST)</span>
                    <span>&lt; 2ms Parsing</span>
                  </div>
                  <div className="h-2.5 bg-emerald-500/40 rounded w-full" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* STAGE 05: Core Emblem Assembly */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center text-center space-y-6 pt-8 z-20 transform-gpu"
          >
            <div className="w-24 h-24 rounded-3xl bg-[#121722] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <GlyphLogo size={48} glow />
            </div>

            <div className="space-y-3 max-w-lg mx-auto">
              <span className="text-xs font-mono-code text-orange-400 uppercase tracking-widest px-3 py-1 rounded bg-orange-950/60 border border-orange-800/40 inline-flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                Stage 05 • Core Synthesis Complete
              </span>
              <h3 className="text-3xl font-bold text-white tracking-tight">rzglyph Core Emblem</h3>
              <p className="text-slate-400 text-sm font-mono-code leading-relaxed">
                All document routes, layout structures, and component blocks compiled with 100% deterministic execution.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
