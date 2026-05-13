"use client";

import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

interface SkillInstallTabsProps {
  skillSlug: string;
  installCommand: string;
}

export function SkillInstallTabs({ installCommand }: SkillInstallTabsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full sm:w-auto mt-6 lg:mt-0">
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
    </div>
  );
}
