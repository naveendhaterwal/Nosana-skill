"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Copy, Check, Zap, Package, Terminal, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-primary/10"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function CodeBlock({ code, label }: { code: string; label?: string }) {
  return (
    <div className="bg-black/60 border border-white/10 rounded-xl overflow-hidden">
      {label && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
          <span className="text-xs text-muted-foreground font-mono">{label}</span>
          <CopyButton text={code} />
        </div>
      )}
      <div className="p-4 flex items-center justify-between gap-4">
        <code className="text-sm font-mono text-primary/90 whitespace-pre-wrap break-all">{code}</code>
        {!label && <CopyButton text={code} />}
      </div>
    </div>
  );
}

const ALL_SKILLS = [
  "nos/analyze-ai-project",
  "nos/debug-nosana-deployment",
  "nos/deploy-ai-agent",
  "nos/deploy-ai-project",
  "nos/deploy-persistent-api",
  "nos/recommend-gpu-market",
  "nos/network-monitor",
  "nos/node-operator",
  "nos/nosana-ai-deployment-operator",
  "nos/nosana-deployment-architect",
  "nos/nosana-failure-recovery-operator",
  "nos/nosana-market-analyst",
  "nos/nosana-persistent-service-operator",
  "nos/skill-composer",
];

const SKILL_DESCRIPTIONS: Record<string, string> = {
  "nos/analyze-ai-project": "Workload orchestration compiler",
  "nos/debug-nosana-deployment": "Incident-response & telemetry debugger",
  "nos/deploy-ai-agent": "Autonomous AI agent deployer",
  "nos/deploy-ai-project": "CLI job execution operator",
  "nos/deploy-persistent-api": "Long-running service deployment engine",
  "nos/recommend-gpu-market": "GPU cost & market selection engine",
  "nos/network-monitor": "Blockchain state & market monitor",
  "nos/node-operator": "Compute host infrastructure operator",
  "nos/nosana-ai-deployment-operator": "AI deployment engine",
  "nos/nosana-deployment-architect": "Deployment architecture engine",
  "nos/nosana-failure-recovery-operator": "Failure recovery engine",
  "nos/nosana-market-analyst": "Market analysis engine",
  "nos/nosana-persistent-service-operator": "Persistent service operator",
  "nos/skill-composer": "Async orchestration controller",
};

const installAllCmd = `npx nos-skill@beta add-all nos`;
const installAllOneLine = installAllCmd;

export default function InstallPage() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen pt-28 pb-20">
        {/* Background decorations */}
        <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="fixed inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
              nos-skill v0.9.0-beta
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 tracking-tight">
              Install All Skills
            </h1>
            <p className="text-lg text-muted-foreground">
              Install all <span className="text-primary font-semibold">{ALL_SKILLS.length} Nosana operational skills</span> into your AI agents — Antigravity, Cursor, Claude Code, Windsurf, Goose, and Gemini CLI.
            </p>
          </div>

          <div className="space-y-8">

            {/* Step 1 — Quick install all */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8 shadow-[0_0_40px_rgba(0,209,0,0.06)]">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  <Zap className="h-4 w-4" />
                </div>
                <h2 className="text-xl font-heading font-semibold text-foreground">One-Command Install (All 14 Skills)</h2>
              </div>
              <p className="text-muted-foreground mb-5 text-sm ml-12">
                Run this in your terminal to install every Nosana skill at once. No configuration needed.
              </p>
              <CodeBlock
                label="terminal"
                code={installAllCmd}
              />
              <p className="text-xs text-muted-foreground mt-3 ml-1">
                The <code className="text-primary/80 bg-primary/10 px-1 rounded">--yes</code> flag can be appended to skip all confirmation prompts.
              </p>
            </div>

            {/* Step 2 — List / verify */}
            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  <Terminal className="h-4 w-4" />
                </div>
                <h2 className="text-xl font-heading font-semibold text-foreground">Verify Installation</h2>
              </div>
              <p className="text-muted-foreground mb-5 text-sm ml-12">
                Confirm all skills are installed correctly across your agents.
              </p>
              <div className="space-y-3">
                <CodeBlock code="npx nos-skill installed" />
                <CodeBlock code="npx nos-skill list" />
              </div>
            </div>

            {/* Step 3 — Install individual */}
            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  <Package className="h-4 w-4" />
                </div>
                <h2 className="text-xl font-heading font-semibold text-foreground">Install Individual Skills</h2>
              </div>
              <p className="text-muted-foreground mb-5 text-sm ml-12">
                Pick and install only the skills you need.
              </p>
              <div className="space-y-2">
                {(showAll ? ALL_SKILLS : ALL_SKILLS.slice(0, 5)).map((skill) => (
                  <div key={skill} className="flex items-center justify-between gap-4 bg-black/40 border border-white/5 rounded-xl px-4 py-3 group hover:border-primary/20 transition-colors">
                    <div className="flex-1 min-w-0">
                      <code className="text-sm font-mono text-foreground/90 block truncate">{`npx nos-skill add ${skill}`}</code>
                      <span className="text-xs text-muted-foreground">{SKILL_DESCRIPTIONS[skill]}</span>
                    </div>
                    <CopyButton text={`npx nos-skill add ${skill}`} />
                  </div>
                ))}
                {!showAll && ALL_SKILLS.length > 5 && (
                  <button
                    onClick={() => setShowAll(true)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors border border-dashed border-white/10 hover:border-primary/30 rounded-xl mt-1"
                  >
                    <ChevronDown className="h-4 w-4" />
                    Show {ALL_SKILLS.length - 5} more skills
                  </button>
                )}
              </div>
            </div>

            {/* Supported Agents */}
            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-6">Supported AI Agents</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: "Antigravity", type: "Global" },
                  { name: "Cursor", type: "Rules" },
                  { name: "Claude Code", type: "Local" },
                  { name: "Windsurf", type: "Context" },
                  { name: "Goose", type: "Global" },
                  { name: "Gemini CLI", type: "Local" },
                ].map((agent) => (
                  <div key={agent.name} className="flex items-center gap-2 bg-black/30 border border-white/5 rounded-xl px-4 py-3">
                    <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-foreground">{agent.name}</div>
                      <div className="text-xs text-muted-foreground">{agent.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
