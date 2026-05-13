export function buildInstallCommand(skillSlug: string, namespace: string = "nos"): string {
  return `npx nos-skill@beta add ${namespace}/${skillSlug} --yes`;
}
