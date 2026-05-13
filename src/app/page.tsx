import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { SkillGrid } from "@/components/skills/SkillGrid";
import { getSkills } from "@/lib/data";
import { Search, Zap, ShieldCheck } from "lucide-react";

export default async function Home() {
  const skills = await getSkills();
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        
        {/* Featured Skills Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 md:flex md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground">Featured Skills</h2>
                <p className="mt-2 text-muted-foreground">Discover the most popular deployment tools on Nosana.</p>
              </div>
            </div>
            
            <SkillGrid skills={skills.slice(0, 6)} />
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-24 bg-secondary/30 border-y border-border/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">How it works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
              Three simple steps to automate your AI infrastructure on the decentralized cloud.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-border -translate-y-1/2 -z-10" />
              
              {[
                {
                  icon: Search,
                  title: "1. Discover a Skill",
                  desc: "Find the right operational skill for your AI workload in the marketplace."
                },
                {
                  icon: Zap,
                  title: "2. Install & Configure",
                  desc: "Install via CLI and configure your inputs (repo, model, framework)."
                },
                {
                  icon: ShieldCheck,
                  title: "3. Deploy Workloads",
                  desc: "Execute the skill to automatically provision GPUs and run your AI apps."
                }
              ].map((step, i) => (
                <div key={i} className="bg-card border border-border/50 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
                  <div className="h-16 w-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Use Skills */}
        <section className="py-32 bg-background relative overflow-hidden">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                Why use deployment skills?
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  The Nosana Skill Marketplace transforms complex GPU orchestration into simple, reusable commands.
                </p>
                <ul className="space-y-4">
                  {[
                    "Reduce deployment complexity from hours to minutes.",
                    "Automate GPU market selection for maximum cost-efficiency.",
                    "Simplify orchestration with battle-tested workflows.",
                    "Debug failures faster with built-in operational intelligence.",
                    "Reuse infrastructure patterns across your organization."
                  ].map((point, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-4 mt-1 bg-primary/20 p-1 rounded">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
