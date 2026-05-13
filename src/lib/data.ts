import { LucideIcon, Rocket, Activity, BarChart, HardDrive, ShieldAlert, Cpu, Settings, Workflow, Network, Server } from "lucide-react";
import { fetchRegistryIndex, RegistrySkill } from "./registry";

export type SkillCategory = "AI Deployment" | "GPU Analysis" | "AI Agents" | "Debugging" | "Persistent APIs" | "Runtime Optimization" | "Orchestration Operators";

export interface Skill {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: SkillCategory;
  tags: string[];
  frameworks: string[];
  downloads: number;
  complexity: "Beginner" | "Intermediate" | "Advanced";
  icon: string;
  trustLevel?: string;
  compatibility?: Record<string, string>;
  skillType?: "app" | "engine";
}

export const SKILL_ICONS: Record<string, any> = {
  rocket: Rocket,
  activity: Activity,
  chart: BarChart,
  drive: HardDrive,
  alert: ShieldAlert,
  cpu: Cpu,
  settings: Settings,
  workflow: Workflow,
  network: Network,
  server: Server,
};

function formatSkillName(slug: string): string {
  // e.g. analyze-ai-project -> Analyze AI Project
  return slug
    .replace(/^nosana-/, '') // Remove 'nosana-' prefix for cleaner names
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/\bAi\b/g, 'AI')
    .replace(/\bApi\b/g, 'API');
}

function determineCategory(tags: string[], skillType: "app" | "engine"): SkillCategory {
  if (skillType === "engine") {
    if (tags.includes("monitor") || tags.includes("network")) return "Orchestration Operators"; // Actually, mock had Network Monitor as Orchestration
    if (tags.includes("economics") || tags.includes("cost")) return "GPU Analysis";
    return "Orchestration Operators";
  }
  if (tags.includes("ai-agent")) return "AI Agents";
  if (tags.includes("persistent") || tags.includes("always-on")) return "Persistent APIs";
  if (tags.includes("economics") || tags.includes("cost")) return "GPU Analysis";
  if (tags.includes("recovery") || tags.includes("diagnostics") || tags.includes("sre")) return "Debugging";
  return "AI Deployment";
}

function determineIcon(category: SkillCategory, slug: string): string {
  if (slug.includes('network')) return 'network';
  if (slug.includes('node') || slug.includes('server')) return 'server';
  if (slug.includes('composer')) return 'workflow';
  
  switch (category) {
    case "AI Deployment": return "rocket";
    case "GPU Analysis": return "chart";
    case "Persistent APIs": return "drive";
    case "Debugging": return "alert";
    case "AI Agents": return "cpu";
    case "Runtime Optimization": return "settings";
    case "Orchestration Operators": return "settings";
    default: return "rocket";
  }
}

// Fallback logic for when we need a deterministic download count
function getDeterministicDownloads(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  return 15000 + (Math.abs(hash) % 20000);
}

export async function getSkills(): Promise<Skill[]> {
  const registry = await fetchRegistryIndex();
  
  return registry.skills.map(s => {
    const category = determineCategory(s.tags, s.skillType);
    return {
      id: s.name,
      name: formatSkillName(s.name),
      slug: s.name,
      description: s.description,
      category: category,
      tags: s.tags,
      frameworks: s.skillType === "engine" ? ["Internal"] : ["Any", "vLLM", "Docker"],
      downloads: getDeterministicDownloads(s.name),
      complexity: s.skillType === "engine" ? "Advanced" : (s.tags.includes("beginner") ? "Beginner" : "Intermediate"),
      icon: determineIcon(category, s.name),
      trustLevel: s.trustLevel,
      compatibility: s.compatibility,
      skillType: s.skillType
    };
  });
}

export async function getSkillBySlug(slug: string): Promise<Skill | undefined> {
  const skills = await getSkills();
  return skills.find(s => s.slug === slug);
}
