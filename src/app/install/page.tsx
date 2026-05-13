import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Terminal, Copy } from "lucide-react";

export default function InstallPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background min-h-screen py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">CLI Installation</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Install the Nosana Toolkit to begin using operational skills directly from your terminal.
          </p>

          <div className="space-y-12">
            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">1</div>
                Install via NPM
              </h2>
              <p className="text-muted-foreground mb-4 text-sm">Requires Node.js 18 or higher.</p>
              
              <div className="bg-background border border-border/50 rounded-xl overflow-hidden relative group">
                <button className="absolute right-4 top-4 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  <Copy className="h-4 w-4" />
                </button>
                <div className="p-4 bg-muted/20">
                  <code className="text-sm font-mono text-foreground">
                    npm install -g nos-skill
                  </code>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">2</div>
                Configure Environment
              </h2>
              <p className="text-muted-foreground mb-4 text-sm">Authenticate your CLI with your Solana wallet containing NOS tokens.</p>
              
              <div className="bg-background border border-border/50 rounded-xl overflow-hidden relative group">
                <button className="absolute right-4 top-4 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  <Copy className="h-4 w-4" />
                </button>
                <div className="p-4 bg-muted/20">
                  <code className="text-sm font-mono text-foreground">
                    npx nos-skill@beta login
                  </code>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">3</div>
                Install a Skill
              </h2>
              <p className="text-muted-foreground mb-4 text-sm">You're ready! Find a skill from the marketplace and install it.</p>
              
              <div className="bg-background border border-border/50 rounded-xl overflow-hidden relative group">
                <button className="absolute right-4 top-4 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  <Copy className="h-4 w-4" />
                </button>
                <div className="p-4 bg-muted/20">
                  <code className="text-sm font-mono text-foreground">
                    npx nos-skill@beta add nos/deploy-ai-project --yes
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
