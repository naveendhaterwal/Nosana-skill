import registryIndex from "../../public/registry/nos/index.json";

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

export async function fetchRegistryIndex(): Promise<RegistryIndex> {
  return registryIndex as RegistryIndex;
}

export function getSkillDownloadUrl(skillSlug: string, skillType: "app" | "engine"): string {
  const typePath = skillType === "engine" ? "engines" : "apps";
  return `/registry/nos/${typePath}/${skillSlug}/SKILL.md`;
}
