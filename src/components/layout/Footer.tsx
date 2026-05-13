import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Image src="/logo-white.svg" alt="Nosana Logo" width={110} height={32} className="h-8 w-auto mb-4" />
            <p className="text-sm text-muted-foreground max-w-xs">
              The App Store for AI deployment intelligence. Discover, install, and reuse operational skills for the Nosana Network.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-4 text-foreground">Marketplace</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/skills" className="hover:text-primary transition-colors">All Skills</Link></li>
              <li><Link href="/categories" className="hover:text-primary transition-colors">Categories</Link></li>
              <li><Link href="/skills/deploy-ai-project" className="hover:text-primary transition-colors">Deploy AI Project</Link></li>
              <li><Link href="/skills/analyze-ai-project" className="hover:text-primary transition-colors">Analyze AI Project</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="/install" className="hover:text-primary transition-colors">CLI Installation</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">GitHub</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4 text-foreground">Nosana</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="https://nosana.com" target="_blank" className="hover:text-primary transition-colors">Website</Link></li>
              <li><Link href="https://docs.nosana.com" target="_blank" className="hover:text-primary transition-colors">Nosana Docs</Link></li>
              <li><Link href="https://discord.com/invite/nosana" target="_blank" className="hover:text-primary transition-colors">Discord</Link></li>
              <li><Link href="https://x.com/nosana_ai" target="_blank" className="hover:text-primary transition-colors">Twitter (X)</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Nosana. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
