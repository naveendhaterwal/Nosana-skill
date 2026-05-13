import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SKILL_ICONS, getSkills } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function CategoriesPage() {
  const categories = [
    { name: "AI Deployment", icon: "rocket", desc: "Automate container deployments for AI apps and APIs." },
    { name: "GPU Analysis", icon: "chart", desc: "Analyze markets to find the most cost-effective compute." },
    { name: "AI Agents", icon: "cpu", desc: "Spin up autonomous agents with decentralized reasoning backends." },
    { name: "Debugging", icon: "alert", desc: "Diagnose failed deployments and read container logs." },
    { name: "Persistent APIs", icon: "drive", desc: "Manage always-on APIs with robust health checks." },
    { name: "Runtime Optimization", icon: "activity", desc: "Optimize your inference performance for specific hardware." },
    { name: "Orchestration Operators", icon: "workflow", desc: "Internal control plane operators for the Nosana ecosystem." },
  ];

  const skills = await getSkills();

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background min-h-screen py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl font-heading font-bold text-foreground mb-4">Categories</h1>
            <p className="text-lg text-muted-foreground">
              Browse the Nosana Skill Marketplace by category to find exactly what you need for your operational workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => {
              const Icon = SKILL_ICONS[cat.icon];
              const count = skills.filter(s => s.category === cat.name).length;
              
              return (
                <Link key={i} href={`/skills?c=${cat.name}`}>
                  <div className="bg-card border border-border/50 rounded-xl p-6 h-full flex flex-col hover:border-primary/50 group transition-all card-glow cursor-pointer">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="font-heading font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">{cat.name}</h2>
                    <p className="text-sm text-muted-foreground mb-6 flex-grow">{cat.desc}</p>
                    
                    <div className="flex justify-between items-center text-sm font-medium pt-4 border-t border-border/40">
                      <span className="text-muted-foreground">{count} Skills</span>
                      <span className="text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                        Browse <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
