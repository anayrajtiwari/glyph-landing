import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, Check, Copy, Info, Lightbulb, AlertTriangle } from 'lucide-react';

interface DocArticle {
  id: string;
  category: string;
  title: string;
  description: string;
  content: React.ReactNode;
}

export const DocumentationViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('intro');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const docs: Record<string, DocArticle> = {
    intro: {
      id: 'intro',
      category: 'GETTING STARTED',
      title: 'Introduction to Glyph',
      description: 'The zero-dependency static-site documentation engine & dev server built for instant developer documentation.',
      content: (
        <div className="space-y-6 text-slate-300">
          <p className="leading-relaxed">
            <strong className="text-white font-semibold">Glyph</strong> is a minimal, blazing-fast documentation compiler designed to solve the bloat of modern documentation tools. It parses directories of Markdown and MDX files into responsive, static developer hubs complete with instant client-side fuzzy search.
          </p>

          <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-mono-code text-xs font-bold uppercase tracking-wider">
              <Info className="w-4 h-4" />
              <span>Zero-Dependency Philosophy</span>
            </div>
            <p className="text-xs text-cyan-200/90 leading-relaxed">
              Glyph runs on pure V8 / Node.js standard libraries. No 500MB <code className="bg-cyan-950 px-1 py-0.5 rounded text-cyan-300">node_modules</code> footprint, no complex bundlers, and zero cloud API keys needed for search indexing.
            </p>
          </div>

          <h3 className="text-xl font-bold text-white pt-4">⚡ Key Performance Pillars</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono-code">
            <li className="p-4 rounded-lg bg-[#0a0d14] border border-[#232a3b] space-y-1">
              <span className="text-cyan-400 font-bold">&lt; 50ms Benchmark Build Times</span>
              <p className="text-slate-400 font-sans text-xs">Under benchmark conditions, compiles entire documentation directories in milliseconds.</p>
            </li>
            <li className="p-4 rounded-lg bg-[#0a0d14] border border-[#232a3b] space-y-1">
              <span className="text-emerald-400 font-bold">Offline Client Fuzzy Search</span>
              <p className="text-slate-400 font-sans text-xs">Embedded JSON index for fast browser-side search with zero external API calls.</p>
            </li>
            <li className="p-4 rounded-lg bg-[#0a0d14] border border-[#232a3b] space-y-1">
              <span className="text-orange-400 font-bold">Native GitHub Callouts</span>
              <p className="text-slate-400 font-sans text-xs">Supports <code className="text-slate-200">[!NOTE]</code>, <code className="text-slate-200">[!TIP]</code>, <code className="text-slate-200">[!WARNING]</code> blockquotes.</p>
            </li>
            <li className="p-4 rounded-lg bg-[#0a0d14] border border-[#232a3b] space-y-1">
              <span className="text-purple-400 font-bold">Live Preview Dev Server</span>
              <p className="text-slate-400 font-sans text-xs">Automatic local rebuild on file save at localhost:3000.</p>
            </li>
          </ul>
        </div>
      ),
    },
    cli: {
      id: 'cli',
      category: 'CLI WORKFLOW',
      title: 'Commands & Dev Preview Server',
      description: 'Learn how to invoke the Glyph compiler CLI to build production static bundles or launch the local dev server.',
      content: (
        <div className="space-y-6 text-slate-300">
          <p className="leading-relaxed">
            Glyph provides a lightweight CLI. You can execute commands via <code className="bg-[#181e2b] px-2 py-0.5 rounded text-cyan-300 font-mono-code text-xs">glyph build</code> or <code className="bg-[#181e2b] px-2 py-0.5 rounded text-cyan-300 font-mono-code text-xs">glyph dev</code>.
          </p>

          <div className="space-y-4">
            <h4 className="text-sm font-mono-code text-cyan-400 font-bold uppercase tracking-wider">1. Production Build Command</h4>
            <div className="p-4 rounded-lg bg-[#0a0d14] border border-[#232a3b] font-mono-code text-xs flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-slate-100">$ glyph build</div>
                <div className="text-slate-500"># Compiles docs/ directory into production static HTML output inside dist/</div>
              </div>
              <button
                onClick={() => copyToClipboard('glyph build', 'build')}
                className="p-2 rounded bg-[#121722] hover:bg-[#181e2b] text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {copiedCmd === 'build' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <h4 className="text-sm font-mono-code text-emerald-400 font-bold uppercase tracking-wider pt-2">2. Local Preview Dev Server</h4>
            <div className="p-4 rounded-lg bg-[#0a0d14] border border-[#232a3b] font-mono-code text-xs flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-slate-100">$ glyph dev</div>
                <div className="text-slate-500"># Launches HTTP preview server at http://localhost:3000 with auto-reload</div>
              </div>
              <button
                onClick={() => copyToClipboard('glyph dev', 'dev')}
                className="p-2 rounded bg-[#121722] hover:bg-[#181e2b] text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {copiedCmd === 'dev' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      ),
    },
    frontmatter: {
      id: 'frontmatter',
      category: 'CONFIGURATION',
      title: 'YAML Frontmatter Specification',
      description: 'Define document title, sidebar order, and meta descriptions using frontmatter blocks.',
      content: (
        <div className="space-y-6 text-slate-300">
          <p className="leading-relaxed">
            Every page inside your <code className="bg-[#181e2b] px-2 py-0.5 rounded text-cyan-300 font-mono-code text-xs">docs/</code> directory should begin with a YAML frontmatter block. Frontmatter establishes page hierarchy and search metadata.
          </p>

          <div className="p-5 rounded-lg bg-[#0a0d14] border border-[#232a3b] font-mono-code text-xs space-y-2">
            <div className="text-slate-500">---</div>
            <div className="text-cyan-300">title: &quot;Getting Started&quot;</div>
            <div className="text-emerald-300">description: &quot;Learn how to configure your Glyph documentation pipeline.&quot;</div>
            <div className="text-orange-300">order: 1</div>
            <div className="text-slate-500">---</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono-code pt-2">
            <div className="p-4 rounded bg-[#121722] border border-[#232a3b]">
              <span className="text-cyan-400 font-bold">title</span>
              <p className="text-slate-400 font-sans text-xs pt-1">Appears on navigation headers, page tabs, and search results.</p>
            </div>
            <div className="p-4 rounded bg-[#121722] border border-[#232a3b]">
              <span className="text-emerald-400 font-bold">description</span>
              <p className="text-slate-400 font-sans text-xs pt-1">Brief summary indexed for client-side search preview text.</p>
            </div>
            <div className="p-4 rounded bg-[#121722] border border-[#232a3b]">
              <span className="text-orange-400 font-bold">order</span>
              <p className="text-slate-400 font-sans text-xs pt-1">Integer value used to sort the sidebar menu items sequentially.</p>
            </div>
          </div>
        </div>
      ),
    },
    callouts: {
      id: 'callouts',
      category: 'FORMATTING',
      title: 'GitHub-Style Callout Cards',
      description: 'Render rich alert boxes for warnings, tips, notes, and important notices natively.',
      content: (
        <div className="space-y-6 text-slate-300">
          <p className="leading-relaxed">
            Glyph natively parses Markdown blockquote directives into callout alert cards with custom glow accents.
          </p>

          <div className="space-y-4">
            {/* Note alert */}
            <div className="p-4 rounded-lg bg-cyan-950/30 border border-cyan-800/60 space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 font-mono-code text-xs font-bold">
                <Info className="w-4 h-4" />
                <span>&gt; [!NOTE]</span>
              </div>
              <p className="text-xs text-cyan-100 font-light pl-6">
                This site was built automatically by the Glyph compiler.
              </p>
            </div>

            {/* Tip alert */}
            <div className="p-4 rounded-lg bg-emerald-950/30 border border-emerald-800/60 space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-mono-code text-xs font-bold">
                <Lightbulb className="w-4 h-4" />
                <span>&gt; [!TIP]</span>
              </div>
              <p className="text-xs text-emerald-100 font-light pl-6">
                Ensure filenames use hyphens (e.g. <code className="bg-emerald-950 px-1 py-0.5 rounded">getting-started.md</code>) for clean URLs.
              </p>
            </div>

            {/* Warning alert */}
            <div className="p-4 rounded-lg bg-amber-950/30 border border-amber-800/60 space-y-1">
              <div className="flex items-center gap-2 text-amber-400 font-mono-code text-xs font-bold">
                <AlertTriangle className="w-4 h-4" />
                <span>&gt; [!WARNING]</span>
              </div>
              <p className="text-xs text-amber-100 font-light pl-6">
                Do not commit secret credentials or access tokens inside public documentation folders!
              </p>
            </div>
          </div>
        </div>
      ),
    },
    search: {
      id: 'search',
      category: 'ENGINE MECHANICS',
      title: 'Client-Side Fuzzy Search Indexing',
      description: 'How Glyph generates instant local search without external cloud servers or indexing costs.',
      content: (
        <div className="space-y-6 text-slate-300">
          <p className="leading-relaxed">
            During compilation, Glyph scans every page title, header, paragraph token, and metadata block to produce a lightweight static index file: <code className="bg-[#181e2b] px-2 py-0.5 rounded text-orange-300 font-mono-code text-xs">search-index.json</code>.
          </p>

          <div className="p-6 rounded-xl bg-[#0a0d14] border border-[#232a3b] space-y-4">
            <div className="flex items-center justify-between border-b border-[#232a3b] pb-3 text-xs font-mono-code">
              <span className="text-orange-400 font-bold flex items-center gap-2">
                <Search className="w-4 h-4" />
                Zero-Cost Client Matching
              </span>
              <span className="text-slate-500">&lt; 1ms Lookup Speed</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              When a user types into the documentation search bar, Glyph's embedded client matching script queries the local search index in real time. It highlights keyword occurrences and navigates instantly without making network requests.
            </p>
          </div>
        </div>
      ),
    },
  };

  const currentDoc = docs[activeTab] || docs.intro;

  return (
    <section id="docs" className="py-24 bg-[#0a0d14] border-t border-[#232a3b] relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Header Title */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono-code">
            <BookOpen className="w-3.5 h-3.5" />
            <span>OFFICIAL DOCUMENTATION PORTAL</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">
            Glyph Documentation Hub
          </h2>
          <p className="text-slate-400 text-sm font-light max-w-2xl">
            Everything you need to compile, configure, and ship fast developer documentation portals.
          </p>
        </div>

        {/* Interactive Doc Layout (Sidebar + Content Reader) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Documentation Navigation Sidebar */}
          <div className="lg:col-span-4 p-4 rounded-xl bg-[#121722] border border-[#232a3b] space-y-2">
            <div className="px-3 py-2 text-[11px] font-mono-code uppercase tracking-wider text-slate-500 border-b border-[#232a3b] mb-2">
              Documentation Topics
            </div>

            {Object.values(docs).map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-xs font-mono-code transition-all flex items-center justify-between ${
                  activeTab === item.id
                    ? 'bg-cyan-500/10 border border-cyan-500/50 text-cyan-300 font-bold shadow-md'
                    : 'text-slate-400 hover:bg-[#181e2b] hover:text-slate-200 border border-transparent'
                }`}
              >
                <span>{item.title}</span>
                <span className="text-[10px] text-slate-500 uppercase">{item.category}</span>
              </button>
            ))}
          </div>

          {/* Active Documentation Article Reader */}
          <motion.div
            key={currentDoc.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-8 p-8 rounded-xl bg-[#121722] border border-[#232a3b] shadow-2xl space-y-6"
          >
            <div className="border-b border-[#232a3b] pb-6 space-y-2">
              <span className="text-xs font-mono-code text-cyan-400 font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-800/40">
                {currentDoc.category}
              </span>
              <h3 className="text-3xl font-bold tracking-tight text-white pt-2">{currentDoc.title}</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">{currentDoc.description}</p>
            </div>

            <div className="pt-2">
              {currentDoc.content}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
