import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background min-h-screen py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">Documentation</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Everything you need to know about discovering, installing, and creating Nosana Skills.
          </p>

          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">What are Skills?</h2>
              <div className="prose prose-invert max-w-none text-muted-foreground">
                <p>
                  A "Skill" in the Nosana ecosystem is a standardized, reusable unit of operational intelligence. 
                  Instead of writing complex deployment scripts or manually navigating the network, skills package 
                  infrastructure workflows into simple, predictable commands.
                </p>
                <p>
                  Think of them like pre-configured AI Agents that know exactly how to talk to the Nosana blockchain, 
                  orchestrate Docker containers, and debug GPU clusters.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">How do they work?</h2>
              <div className="prose prose-invert max-w-none text-muted-foreground">
                <p>
                  Skills are defined using simple declarative schemas (usually YAML/JSON) which map user inputs to 
                  execution Directed Acyclic Graphs (DAGs). When you run a skill, the Nosana Skill Engine processes 
                  the DAG to execute the required API calls, format the output, and guide you through the operation.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Contributing Skills</h2>
              <div className="prose prose-invert max-w-none text-muted-foreground">
                <p>
                  The marketplace is community-driven. If you have built an excellent deployment pattern for a 
                  specific framework (e.g. ComfyUI, vLLM, DeepSeek), you can package it as a skill and publish it 
                  to the marketplace.
                </p>
                <p>
                  Check out the <a href="https://github.com/nosana-ci/nosana-skills" className="text-primary hover:underline">Nosana Skills GitHub Repository</a> to see examples and submit your own via a Pull Request.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
