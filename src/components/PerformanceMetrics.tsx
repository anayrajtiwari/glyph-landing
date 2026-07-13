import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Zap, PackageCheck, ShieldCheck } from 'lucide-react';

export const PerformanceMetrics: React.FC = () => {
  return (
    <section id="performance" className="py-24 bg-[#0a0d14] border-t border-[#232a3b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-xs font-mono-code">
            <Gauge className="w-3.5 h-3.5" />
            <span>BENCHMARKS & PERFORMANCE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white">
            Engineered For Speed &amp; Precision
          </h2>
          <p className="text-slate-400 text-base font-light">
            Zero JS runtime overhead. Direct V8/Rust parser execution. Unmatched build times.
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Metric 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-xl bg-[#121722] border border-[#232a3b] space-y-4 hover:border-cyan-500/40 transition-colors shadow-xl"
          >
            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-5xl font-extrabold font-mono-code text-cyan-400">&lt; 12ms</div>
              <div className="text-slate-200 font-bold text-sm pt-2">Compile Time</div>
              <p className="text-slate-400 text-xs font-light pt-1 leading-relaxed">
                Parses, lowers AST, and emits production bundles in milliseconds.
              </p>
            </div>
          </motion.div>

          {/* Metric 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-xl bg-[#121722] border border-[#232a3b] space-y-4 hover:border-emerald-500/40 transition-colors shadow-xl"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
              <PackageCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-5xl font-extrabold font-mono-code text-emerald-400">0 KB</div>
              <div className="text-slate-200 font-bold text-sm pt-2">Runtime Overhead</div>
              <p className="text-slate-400 text-xs font-light pt-1 leading-relaxed">
                Clean HTML/CSS static output with zero client JavaScript runtime bloat.
              </p>
            </div>
          </motion.div>

          {/* Metric 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-xl bg-[#121722] border border-[#232a3b] space-y-4 hover:border-orange-500/40 transition-colors shadow-xl"
          >
            <div className="w-10 h-10 rounded-lg bg-orange-950/80 border border-orange-800/60 flex items-center justify-center text-orange-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-5xl font-extrabold font-mono-code text-orange-400">0</div>
              <div className="text-slate-200 font-bold text-sm pt-2">External Dependencies</div>
              <p className="text-slate-400 text-xs font-light pt-1 leading-relaxed">
                Self-contained native compiler architecture built for ultimate security.
              </p>
            </div>
          </motion.div>

          {/* Metric 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-xl bg-[#121722] border border-[#232a3b] space-y-4 hover:border-cyan-500/40 transition-colors shadow-xl"
          >
            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <div className="text-5xl font-extrabold font-mono-code text-slate-100">100/100</div>
              <div className="text-slate-200 font-bold text-sm pt-2">Lighthouse Score</div>
              <p className="text-slate-400 text-xs font-light pt-1 leading-relaxed">
                Perfect score across Performance, Accessibility, Best Practices, and SEO.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
