export interface RegistrySkill {
  name: string;
  namespace: string;
  version: string;
  description: string;
  author: string;
  license: string;
  tags: string[];
  compatibility: Record<string, string>;
  trustLevel: string;
  entry: string;
  skillType: "app" | "engine";
}

export interface RegistryIndex {
  skills: RegistrySkill[];
}

const REGISTRY_BASE_URL = "https://raw.githubusercontent.com/naveendhaterwal/nos-skill-npm/main/registry";

let cachedIndex: RegistryIndex | null = null;
let cacheTime = 0;
const CACHE_DURATION = 60 * 1000; // 1 minute

export async function fetchRegistryIndex(): Promise<RegistryIndex> {
  const now = Date.now();
  if (cachedIndex && now - cacheTime < CACHE_DURATION) {
    return cachedIndex;
  }

  try {
    const response = await fetch(`${REGISTRY_BASE_URL}/nos/index.json`, {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      if (cachedIndex) return cachedIndex;
      throw new Error("Failed to fetch registry index");
    }
    
    const data = await response.json();
    cachedIndex = data;
    cacheTime = now;
    return data;
  } catch (error) {
    if (cachedIndex) return cachedIndex;
    throw error;
  }
}

export function getSkillDownloadUrl(skillSlug: string, skillType: "app" | "engine"): string {
  const typePath = skillType === "engine" ? "engines" : "apps";
  return `${REGISTRY_BASE_URL}/nos/${typePath}/${skillSlug}/SKILL.md`;
}
