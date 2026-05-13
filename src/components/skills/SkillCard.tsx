import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skill, SKILL_ICONS } from "@/lib/data";

export function SkillCard({ skill }: { skill: Skill }) {
  const Icon = SKILL_ICONS[skill.icon] || SKILL_ICONS["rocket"];

  return (
    <Link href={`/skills/${skill.slug}`}>
      <Card className="h-full bg-black/40 backdrop-blur-md border-white/10 card-glow transition-all duration-300 group flex flex-col cursor-pointer overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <CardHeader className="pb-4 pt-6 px-6 relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div className="h-12 w-12 flex items-center justify-center">
              <Icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <Badge variant="outline" className="bg-white/5 backdrop-blur font-mono text-xs text-muted-foreground border-white/10 uppercase tracking-wider">
              {skill.category}
            </Badge>
          </div>
          <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-glow transition-all tracking-tight">
            {skill.name}
          </h3>
        </CardHeader>
        
        <CardContent className="pb-6 px-6 flex-grow relative z-10">
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed font-sans">
            {skill.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {skill.frameworks.slice(0, 3).map((fw) => (
              <Badge key={fw} variant="secondary" className="bg-white/5 hover:bg-white/10 text-foreground border border-white/5 text-xs font-mono">
                {fw}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="px-6 py-4 border-t border-white/10 bg-white/5 flex justify-between items-center relative z-10">
          <div></div>
          <div className="text-xs font-medium text-primary font-mono bg-primary/10 px-2 py-1 rounded border border-primary/20">
            {skill.complexity}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
