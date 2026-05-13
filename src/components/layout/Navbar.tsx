import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, Star } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl h-16 flex items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image src="/logo-white.svg" alt="Nosana" width={120} height={32} className="h-7 w-auto" />
          </Link>
          
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="/skills" className="text-muted-foreground hover:text-primary transition-all duration-200">Browse Skills</Link>
            <Link href="/categories" className="text-muted-foreground hover:text-primary transition-all duration-200">Categories</Link>
            <Link href="/install" className="text-muted-foreground hover:text-primary transition-all duration-200">CLI</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="https://github.com/naveendhaterwal/Nosana-skill/tree/main" target="_blank" className="hidden sm:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10">
            <Star className="w-4 h-4" />
            <span>Star on GitHub</span>
          </Link>
          <Link href="/install">
            <Button className="h-9 px-5 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,209,0,0.3)]">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
