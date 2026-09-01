import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Search, Workflow, TerminalSquare } from 'lucide-react';

export const FeaturesArchitecture: React.FC = () => {
  return (
    <section id="architecture" className="py-24 bg-[#0a0d14] border-t border-[#232a3b] relative">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono-code">
            <Workflow className="w-3.5 h-3.5" />
            <span>COMPILER ARCHITECTURE &amp; DESIGN</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">
            Precision Pipeline Mechanics
          </h2>
          <p className="text-slate-400 text-base font-light max-w-2xl">
            Built from the ground up for deterministic execution without external cloud dependencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-[#121722] border border-[#232a3b] space-y-4 hover:border-cyan-500/40 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Single-Pass AST Parser</h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Extracts YAML frontmatter, fenced code syntax, layout components, and blockquote alerts (`[!NOTE]`, `[!TIP]`) in a unified execution stream.
            </p>
            <div className="p-3 rounded bg-[#0a0d14] border border-[#232a3b] font-mono-code text-xs text-cyan-300">
              $ glyph check
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-xl bg-[#121722] border border-[#232a3b] space-y-4 hover:border-emerald-500/40 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Static Output Generator</h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Emits standalone static HTML, custom CSS tokens, page-to-page pagers, and responsive glassmorphic navigation structures.
            </p>
            <div className="p-3 rounded bg-[#0a0d14] border border-[#232a3b] font-mono-code text-xs text-emerald-300">
              $ glyph build
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-xl bg-[#121722] border border-[#232a3b] space-y-4 hover:border-orange-500/40 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-orange-950 border border-orange-800/60 flex items-center justify-center text-orange-400">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Client-Side Search Indexer</h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Generates a zero-cost local fuzzy search index on-the-fly, giving users instant search queries without requiring external search APIs.
            </p>
            <div className="p-3 rounded bg-[#0a0d14] border border-[#232a3b] font-mono-code text-xs text-orange-300">
              [Search] Generated index: search-index.json (&lt; 2ms)
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-xl bg-[#121722] border border-[#232a3b] space-y-4 hover:border-cyan-500/40 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
              <TerminalSquare className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Callout Alerts &amp; Syntax Engine</h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Supports native GitHub-style blockquotes (`[!NOTE]`, `[!TIP]`, `[!WARNING]`, `[!IMPORTANT]`) rendered directly as modern styled callout cards.
            </p>
            <div className="p-3 rounded bg-[#0a0d14] border border-[#232a3b] font-mono-code text-xs text-cyan-300">
              $ glyph dev
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
