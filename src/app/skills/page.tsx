import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getSkills, SkillCategory } from "@/lib/data";
import { MarketplaceClient } from "./MarketplaceClient";

export default async function MarketplacePage({
  searchParams,
}: {
  searchParams: { q?: string; category?: string };
}) {
  const categories: SkillCategory[] = ["AI Deployment", "GPU Analysis", "AI Agents", "Debugging", "Persistent APIs", "Runtime Optimization", "Orchestration Operators"];
  const skills = await getSkills();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 bg-background pt-24 relative overflow-hidden flex flex-col">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="border-b border-white/5 bg-black/40 backdrop-blur-sm relative z-10 shrink-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 tracking-tight">Marketplace</h1>
            <p className="text-lg text-muted-foreground max-w-2xl font-sans">
              Browse and discover operational intelligence skills to automate your AI infrastructure on Nosana.
            </p>
          </div>
        </div>

        <MarketplaceClient 
          initialSkills={skills} 
          categories={categories} 
          initialCategory={searchParams.category}
          initialQuery={searchParams.q}
        />
      </main>
    </div>
  );
}
