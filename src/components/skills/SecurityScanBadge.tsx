import { ShieldCheck, Server, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SecurityScanBadgeProps {
  trustLevel?: string;
  compatibility?: Record<string, string>;
  skillType?: "app" | "engine";
}

export function SecurityScanBadge({ trustLevel = "unknown", compatibility = {}, skillType = "app" }: SecurityScanBadgeProps) {
  const isVerified = trustLevel === "verified";

  return (
    <div className="bg-card border border-border/50 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        {isVerified ? (
          <ShieldCheck className="h-5 w-5 text-primary" />
        ) : (
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
        )}
        <h3 className="font-heading font-semibold text-foreground">Security Scan</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">Audit State</span>
          <Badge variant="outline" className={isVerified ? "border-primary/50 text-primary" : "border-yellow-500/50 text-yellow-500"}>
            {trustLevel.toUpperCase()}
          </Badge>
        </div>
        
        <div className="flex justify-between items-center text-sm border-t border-border/40 pt-4">
          <span className="text-muted-foreground flex items-center">
            <Server className="h-4 w-4 mr-2" />
            Install Target
          </span>
          <span className="font-mono text-foreground">{skillType.toUpperCase()}</span>
        </div>

        {compatibility && Object.keys(compatibility).length > 0 && (
          <div className="border-t border-border/40 pt-4">
            <span className="text-sm text-muted-foreground block mb-2">Compatibility</span>
            <div className="flex flex-col gap-2">
              {Object.entries(compatibility).map(([pkg, ver]) => (
                <div key={pkg} className="flex justify-between text-xs">
                  <span className="font-mono text-foreground">{pkg}</span>
                  <span className="text-primary">{String(ver)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
