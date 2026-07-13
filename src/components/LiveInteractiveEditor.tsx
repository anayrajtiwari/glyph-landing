import React, { useState } from 'react';
import { Code, Eye, Sparkles, Zap } from 'lucide-react';

const SAMPLES = {
  landing: `---
app_name: "Aura Core"
target: "nextjs"
---

# Aura Engine

Deterministic rzglyph compiler built for speed and precision.

\`\`\`tsx [HeroWidget]
export function HeroWidget() {
  return (
    <div className="card">
      <h2>🚀 Zero Latency Architecture</h2>
      <p>Compiled in under 5ms.</p>
    </div>
  );
}
\`\`\`

\`\`\`css (theme.css)
.card {
  background: #121722;
  border: 1px solid #06b6d4;
  padding: 1.5rem;
  border-radius: 12px;
}
\`\`\`
`,
  api: `---
app_name: "rzglyph API Docs"
target: "nextjs"
---

# API Reference

Fast, lightweight REST & GraphQL endpoints.

\`\`\`tsx [EndpointCard]
export function EndpointCard() {
  return (
    <div className="endpoint">
      <span className="method">POST</span>
      <code>/v1/compile</code>
    </div>
  );
}
\`\`\`

\`\`\`css (api.css)
.endpoint {
  display: flex;
  gap: 1rem;
  align-items: center;
  background: #181e2b;
  padding: 1rem;
}
.method {
  background: #10b981;
  color: #0a0d14;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-weight: bold;
}
\`\`\`
`,
  spec: `---
app_name: "System Spec"
target: "rust"
---

# Architecture Specification

Multi-target compiler lowerer & IR generator.

\`\`\`rs (server)
fn main() {
    println!("Server running on 127.0.0.1:3000");
}
\`\`\`
`
};

export const LiveInteractiveEditor: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'landing' | 'api' | 'spec'>('landing');
  const [markdown, setMarkdown] = useState<string>(SAMPLES.landing);
  const [compileTime, setCompileTime] = useState<number>(3.4);

  const handleSelectSample = (sampleKey: 'landing' | 'api' | 'spec') => {
    setActiveTab(sampleKey);
    setMarkdown(SAMPLES[sampleKey]);
    setCompileTime(Number((Math.random() * 2 + 2).toFixed(1)));
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
    setCompileTime(Number((Math.random() * 2 + 1.5).toFixed(1)));
  };

  const extractedTitle = markdown.match(/#\s+(.*)/)?.[1] || 'Compiled Web App';
  const extractedParagraph = markdown.match(/#\s+.*\n+([^`\n]+)/)?.[1] || 'Live preview synthesized from markdown.';
  const extractedCodeSnippet = markdown.match(/```[\s\S]*?\n([\s\S]*?)```/)?.[1] || '';

  return (
    <section id="editor" className="py-24 bg-[#0a0d14] border-t border-[#232a3b] relative">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono-code">
              <Zap className="w-3.5 h-3.5" />
              <span>LIVE INSTANT PLAYGROUND</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
              Markdown &rarr; Live Webpage Editor
            </h2>
            <p className="text-slate-400 text-sm font-light">
              Type Markdown instructions on the left; see instant rendered web applications on the right.
            </p>
          </div>

          <div className="flex items-center gap-2 p-1 rounded-lg bg-[#121722] border border-[#232a3b]">
            <button
              onClick={() => handleSelectSample('landing')}
              className={`px-3 py-1.5 rounded text-xs font-mono-code transition-colors ${
                activeTab === 'landing' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Landing Spec
            </button>
            <button
              onClick={() => handleSelectSample('api')}
              className={`px-3 py-1.5 rounded text-xs font-mono-code transition-colors ${
                activeTab === 'api' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              API Docs
            </button>
            <button
              onClick={() => handleSelectSample('spec')}
              className={`px-3 py-1.5 rounded text-xs font-mono-code transition-colors ${
                activeTab === 'spec' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Rust Spec
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-xl border border-[#232a3b] bg-[#121722] overflow-hidden shadow-2xl">
          
          <div className="flex flex-col border-r border-[#232a3b]">
            <div className="px-4 py-3 bg-[#0a0d14] border-b border-[#232a3b] flex items-center justify-between font-mono-code text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                <span>docs/spec.md</span>
              </div>
              <span className="text-[10px] text-slate-500">UTF-8 • Markdown</span>
            </div>

            <textarea
              value={markdown}
              onChange={handleTextChange}
              className="w-full h-[420px] p-6 bg-[#121722] text-slate-200 font-mono-code text-sm leading-relaxed resize-none focus:outline-none selection:bg-cyan-900"
              spellCheck={false}
            />

            <div className="px-4 py-2.5 bg-[#0a0d14] border-t border-[#232a3b] flex items-center justify-between text-xs font-mono-code text-slate-500">
              <span>Lines: {markdown.split('\n').length}</span>
              <span className="text-cyan-400">Compiler status: Active</span>
            </div>
          </div>

          <div className="flex flex-col bg-[#0a0d14]">
            <div className="px-4 py-3 bg-[#0a0d14] border-b border-[#232a3b] flex items-center justify-between font-mono-code text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-emerald-400" />
                <span>Live Synthesized View</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-400 font-bold">{compileTime}ms</span>
              </div>
            </div>

            <div className="p-8 h-[420px] overflow-y-auto space-y-6">
              <div className="p-6 rounded-xl bg-[#121722] border border-cyan-500/30 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-[#232a3b] pb-3">
                  <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>rzglyph Synthesized View</span>
                  </div>
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-emerald-950 text-emerald-300">
                    Zero JS Bundle
                  </span>
                </div>

                <h3 className="text-3xl font-bold tracking-tight text-white">{extractedTitle}</h3>
                <p className="text-slate-300 text-sm leading-relaxed font-light">{extractedParagraph}</p>

                {extractedCodeSnippet && (
                  <div className="p-4 rounded bg-[#0a0d14] border border-[#232a3b] font-mono-code text-xs text-emerald-400 space-y-2">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Extracted Component Code</div>
                    <pre className="overflow-x-auto"><code>{extractedCodeSnippet}</code></pre>
                  </div>
                )}
              </div>
            </div>

            <div className="px-4 py-2.5 bg-[#0a0d14] border-t border-[#232a3b] flex flex-wrap justify-between items-center text-xs font-mono-code text-slate-400">
              <span>AST Lex: 0.8ms</span>
              <span>IR Transpile: 1.4ms</span>
              <span>Emit: 1.2ms</span>
              <span className="text-emerald-400">Total: {compileTime}ms</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
