"use client";

import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Official Background Image with Fixed Attachment for Parallax */}
      <div className="absolute inset-0 bg-[url('/nosana-bg.jpg')] bg-cover bg-center bg-fixed opacity-40 mix-blend-screen" />
      
      {/* Dark gradient overlay to blend into the #010C04 background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Decorative Glowing Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none animate-pulse mix-blend-plus-lighter" />
      
      {/* Technical Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase mb-10 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
            Nosana Ecosystem V1.0 - Operational Intelligence
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold font-heading tracking-tight text-foreground max-w-5xl mx-auto leading-[0.95] mb-8">
            The AI Compute <br className="hidden md:block" />
            <span className="text-primary text-glow italic">Skill Marketplace.</span>
          </h1>
          
          <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed">
            Deploy, optimize, and orchestrate AI workloads with deterministic operational skills designed for the Nosana Network.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/skills">
              <Button size="lg" className="h-14 px-10 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 rounded-full shadow-[0_0_30px_rgba(0,209,0,0.4)] group">
                Explore Skills
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/install">
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all rounded-full group">
                <Terminal className="mr-2 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                Install CLI
              </Button>
            </Link>
          </div>

          {/* Stats / Trust Bar */}
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-center">
              <div className="text-2xl font-bold font-heading">500+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">GPU Nodes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold font-heading">50+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Active Skills</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold font-heading">10k+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Workloads</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
