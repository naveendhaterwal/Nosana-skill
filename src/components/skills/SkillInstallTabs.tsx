"use client";

import { useState } from "react";
import { Copy, Check, Download, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SkillInstallTabsProps {
  skillSlug: string;
  skillType?: "app" | "engine";
  installCommand: string;
  downloadUrl: string;
}

export function SkillInstallTabs({ skillSlug, installCommand, downloadUrl }: SkillInstallTabsProps) {
  const [activeTab, setActiveTab] = useState<"cli" | "download">("cli");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(downloadUrl);
      if (!response.ok) throw new Error("Failed to fetch markdown");
      const text = await response.text();
      const blob = new Blob([text], { type: "text/markdown" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${skillSlug}-SKILL.md`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  return (
    <div className="w-full sm:w-auto mt-6 lg:mt-0">
      <div className="flex border-b border-border/50 mb-4">
        <button
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "cli" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => setActiveTab("cli")}
        >
          CLI
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "download" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => setActiveTab("download")}
        >
          Download
        </button>
      </div>

      {activeTab === "cli" ? (
        <div className="bg-card border border-border/50 rounded-xl p-1 overflow-hidden shadow-[0_0_15px_rgba(16,232,12,0.1)] w-full sm:min-w-[400px]">
          <div className="bg-muted/30 px-4 py-2 border-b border-border/50 flex justify-between items-center">
            <span className="text-xs font-mono text-muted-foreground flex items-center">
              <Terminal className="w-3 h-3 mr-2" />
              Terminal
            </span>
            <button 
              onClick={handleCopy}
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="Copy command"
            >
              {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
          <div className="p-4 overflow-x-auto">
            <code className="text-sm font-mono text-foreground whitespace-nowrap">
              <span className="text-primary mr-2">$</span>
              {installCommand}
              <span className="inline-block w-2 h-4 ml-1 bg-primary animate-pulse align-middle opacity-80" />
            </code>
          </div>
        </div>
      ) : (
        <div className="bg-card border border-border/50 rounded-xl p-6 text-center w-full sm:min-w-[400px]">
          <Download className="w-8 h-8 text-primary mx-auto mb-4 opacity-80" />
          <h3 className="text-sm font-medium text-foreground mb-2">Download Raw Skill</h3>
          <p className="text-xs text-muted-foreground mb-4">
            Download the SKILL.md file for direct injection into your agents.
          </p>
          <Button onClick={handleDownload} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Download {skillSlug}-SKILL.md
          </Button>
        </div>
      )}
    </div>
  );
}
