import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getSkills, getSkillBySlug, SKILL_ICONS } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Terminal, ChevronRight, CheckCircle2, Copy } from "lucide-react";
import Link from "next/link";
import { SkillCard } from "@/components/skills/SkillCard";
import { SkillInstallTabs } from "@/components/skills/SkillInstallTabs";
import { SecurityScanBadge } from "@/components/skills/SecurityScanBadge";
import { buildInstallCommand } from "@/lib/command";
import { getSkillDownloadUrl } from "@/lib/registry";

// Need to dynamically access params in Next.js 15

const CONVERSATIONAL_PROMPTS: Record<string, string> = {
  "analyze-ai-project": "analyze my AI app for Nosana deployment.",
  "debug-nosana-deployment": "debug my failed Nosana deployment.",
  "deploy-ai-agent": "deploy my AI agent to Nosana.",
  "deploy-ai-project": "deploy my AI project to Nosana.",
  "deploy-persistent-api": "deploy my persistent AI API.",
  "recommend-gpu-market": "find the cheapest GPU market for my AI model.",
  "network-monitor": "monitor Nosana network status.",
  "node-operator": "monitor and manage my Nosana node.",
  "nosana-ai-deployment-operator": "manage my AI deployment lifecycle.",
  "nosana-deployment-architect": "design an optimized Nosana deployment.",
  "nosana-failure-recovery-operator": "recover my failed deployment automatically.",
  "nosana-market-analyst": "analyze Nosana GPU market trends.",
  "nosana-persistent-service-operator": "manage my persistent AI services.",
  "skill-composer": "compose a complete Nosana deployment workflow."
};

export default async function SkillDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const skill = await getSkillBySlug(resolvedParams.slug);
  
  if (!skill) {
    notFound();
  }

  const Icon = SKILL_ICONS[skill.icon] || SKILL_ICONS["rocket"];
  const allSkills = await getSkills();
  const relatedSkills = allSkills.filter(s => s.category === skill.category && s.id !== skill.id).slice(0, 3);
  // Fallback if not enough in same category
  if (relatedSkills.length < 3) {
    const extra = allSkills.filter(s => s.id !== skill.id && !relatedSkills.includes(s)).slice(0, 3 - relatedSkills.length);
    relatedSkills.push(...extra);
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background">
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-20 border-b border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-6 flex items-center text-sm text-muted-foreground font-mono">
              <Link href="/skills" className="hover:text-primary transition-colors">Skills</Link>
              <ChevronRight className="h-4 w-4 mx-2 text-white/20" />
              <Link href={`/skills?category=${skill.category}`} className="hover:text-primary transition-colors">{skill.category}</Link>
              <ChevronRight className="h-4 w-4 mx-2 text-white/20" />
              <span className="text-foreground">{skill.name}</span>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
              <div className="flex gap-6 items-start">
                <div className="h-20 w-20 flex items-center justify-center shrink-0 relative">
                  <Icon className="h-12 w-12 text-primary relative z-10" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-3 tracking-tight">{skill.name}</h1>
                  <p className="text-xl text-muted-foreground max-w-2xl font-sans">{skill.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mt-6">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 font-mono text-xs uppercase tracking-wider">
                      {skill.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground border-l border-white/10 pl-3 font-mono">
                      Complexity: <span className="bg-primary/10 text-primary px-2 py-0.5 rounded border border-primary/20 ml-2 font-medium">{skill.complexity}</span>
                    </div>
                  </div>
                </div>
              </div>

              <SkillInstallTabs 
                skillSlug={skill.slug} 
                skillType={skill.skillType || "app"}
                installCommand={buildInstallCommand(skill.slug)}
                downloadUrl={getSkillDownloadUrl(skill.slug, skill.skillType || "app")}
              />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-12">
          {/* MAIN CONTENT */}
          <div className="flex-1 space-y-16">
            
            {/* WHAT IT DOES */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">What this skill does</h2>
              <div className="prose prose-invert max-w-none text-muted-foreground">
                <p>
                  The <strong>{skill.name}</strong> skill eliminates the complexity of orchestrating infrastructure on the Nosana Network. 
                  Instead of manually writing deployment manifests, configuring GPU constraints, and troubleshooting network bindings, 
                  this skill automates the entire process into a single, reliable workflow.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Reduces deployment configuration time from hours to minutes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Automatically validates container parameters before burning NOS tokens.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Ensures compatibility with standard decentralized compute nodes.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* USE CASES */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Common Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Deploying vLLM inference APIs for large language models.",
                  "Running OpenWebUI alongside local chat models.",
                  "Hosting autonomous AI agents like ElizaOS.",
                  "Spinning up ephemeral worker queues for batch processing."
                ].map((useCase, i) => (
                  <div key={i} className="bg-secondary/20 border border-border/50 p-5 rounded-xl">
                    <p className="text-sm text-foreground">{useCase}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CONTRACT (INPUTS/OUTPUTS) */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Data Contract</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-4">Required Inputs</h3>
                  <div className="bg-card border border-border/50 rounded-xl overflow-hidden">
                    <div className="grid grid-cols-3 bg-muted/30 p-4 border-b border-border/50 text-sm font-medium text-muted-foreground">
                      <div>Parameter</div>
                      <div>Type</div>
                      <div>Description</div>
                    </div>
                    <div className="divide-y divide-border/50">
                      {[
                        { name: "github_repo", type: "string", desc: "URL of the GitHub repository containing your workload." },
                        { name: "framework", type: "enum", desc: `One of: ${skill.frameworks.join(', ')}` },
                        { name: "wallet_address", type: "string", desc: "Authorized Solana wallet for billing." },
                      ].map((input, i) => (
                        <div key={i} className="grid grid-cols-3 p-4 text-sm">
                          <div className="font-mono text-foreground">{input.name}</div>
                          <div className="text-primary">{input.type}</div>
                          <div className="text-muted-foreground">{input.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-4">Skill Outputs</h3>
                  <div className="bg-card border border-border/50 rounded-xl p-6">
                    <p className="text-sm text-muted-foreground mb-4">Upon successful execution, this skill returns a structured deployment result:</p>
                    <pre className="bg-background border border-border/50 p-4 rounded-lg overflow-x-auto text-sm font-mono text-muted-foreground">
{`{
  "status": "success",
  "deployment_url": "https://node.nosana.io/...",
  "cost_estimate": "12.5 NOS/day",
  "plan_summary": "Deployed 1 replica on an RTX 4090 market."
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            {/* INSTALLATION */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Installation & Usage</h2>
              
              <SkillInstallTabs 
                skillSlug={skill.slug} 
                skillType={skill.skillType || "app"}
                installCommand={buildInstallCommand(skill.slug)}
                downloadUrl={getSkillDownloadUrl(skill.slug, skill.skillType || "app")}
              />

              <div className="mt-8">
                <p className="text-muted-foreground mb-4">AI Usage Prompt Example:</p>
                <div className="bg-card border border-border/50 rounded-xl p-1 overflow-hidden">
                  <div className="bg-muted/30 px-4 py-2 border-b border-border/50">
                    <span className="text-xs font-mono text-muted-foreground">Tell the AI what to do</span>
                  </div>
                  <div className="p-4 font-mono text-sm text-foreground/90 leading-relaxed">
                    "Use this skill ({skill.slug}) to {CONVERSATIONAL_PROMPTS[skill.slug] || "help me with my task."}"
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <aside className="w-full lg:w-80 flex-shrink-0 space-y-8 lg:sticky lg:top-24 h-fit">
            <SecurityScanBadge 
              trustLevel={skill.trustLevel} 
              compatibility={skill.compatibility} 
              skillType={skill.skillType} 
            />
            <div className="bg-card border border-border/50 rounded-xl p-6">
              <h3 className="font-heading font-semibold text-foreground mb-4">Supported Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {skill.frameworks.map((fw) => (
                  <Badge key={fw} variant="secondary" className="bg-secondary/50">
                    {fw}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border/50 rounded-xl p-6">
              <h3 className="font-heading font-semibold text-foreground mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-border/50 text-muted-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* RELATED SKILLS */}
        <section className="border-t border-border/40 py-16 bg-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Related Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedSkills.map(s => (
                <SkillCard key={s.id} skill={s} />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
