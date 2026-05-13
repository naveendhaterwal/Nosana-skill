"use client";

import { useState, useMemo } from "react";
import { Skill, SkillCategory } from "@/lib/data";
import { Search, SlidersHorizontal, Terminal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SkillGrid } from "@/components/skills/SkillGrid";

interface MarketplaceClientProps {
  initialSkills: Skill[];
  categories: SkillCategory[];
  initialCategory?: string;
  initialQuery?: string;
}

export function MarketplaceClient({ 
  initialSkills, 
  categories,
  initialCategory = "",
  initialQuery = ""
}: MarketplaceClientProps) {
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  const filteredSkills = useMemo(() => {
    let filtered = initialSkills;
    
    if (query) {
      const q = query.toLowerCase();
      filtered = filtered.filter(s => 
        s.name.toLowerCase().includes(q) || 
        s.description.toLowerCase().includes(q) || 
        s.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    
    if (activeCategory) {
      filtered = filtered.filter(s => s.category === activeCategory);
    }
    
    return filtered;
  }, [initialSkills, query, activeCategory]);

  return (
    <div className="flex flex-col md:flex-row flex-1 relative z-10 items-stretch">
      {/* Sidebar / Filters */}
      <aside className="w-full md:w-64 flex-shrink-0 border-r border-white/5 bg-black/20">
        <div className="p-6 space-y-8 md:sticky md:top-24">
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-primary" />
              Filters
            </h3>
            <div className="relative group">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search skills..." 
                className="pl-9 bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all rounded-lg" 
              />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-heading font-semibold text-foreground mb-3 tracking-wide uppercase text-primary/80">Categories</h4>
            <ul className="space-y-1">
              <li>
                <button 
                  onClick={() => setActiveCategory("")}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all ${!activeCategory ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'}`}
                >
                  All Categories
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all ${activeCategory === cat ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-heading font-semibold text-foreground mb-3 tracking-wide uppercase text-primary/80">Frameworks</h4>
            <ul className="space-y-2 px-1">
              {["vLLM", "Triton", "FastAPI", "ElizaOS", "PyTorch", "Any"].map((fw) => (
                <li key={fw}>
                  <label className="flex items-center gap-3 text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors group">
                    <div className="relative flex items-center justify-center">
                      <input type="checkbox" className="peer appearance-none w-4 h-4 rounded border border-white/20 bg-white/5 checked:bg-primary checked:border-primary transition-colors cursor-pointer" />
                      <div className="absolute text-background opacity-0 peer-checked:opacity-100 pointer-events-none">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    {fw}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 p-6 md:p-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
            <p className="text-sm text-muted-foreground font-mono">
              Found <span className="text-primary font-bold">{filteredSkills.length}</span> skill{filteredSkills.length !== 1 && 's'}
              {query && <span> for "<span className="text-foreground">{query}</span>"</span>}
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="h-8 border-white/10 bg-white/5 hover:bg-white/10 hover:text-foreground text-xs font-mono">Most Popular</Button>
              <Button variant="ghost" size="sm" className="h-8 text-xs font-mono text-muted-foreground hover:text-foreground">Newest</Button>
            </div>
          </div>
          
          {filteredSkills.length > 0 ? (
            <SkillGrid skills={filteredSkills} />
          ) : (
            <div className="py-20 text-center border border-dashed border-white/10 rounded-xl bg-white/5 mt-8">
              <Terminal className="h-10 w-10 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-heading font-medium text-foreground mb-2">No skills found</h3>
              <p className="text-muted-foreground max-w-sm mx-auto mb-6">
                We couldn't find any operational skills matching your current search and filter criteria.
              </p>
              <Button onClick={() => { setQuery(""); setActiveCategory(""); }} variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
