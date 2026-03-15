import type { FeatureContext, HealthResult } from "../../types/feature.js";

export function getHealth(context: FeatureContext): HealthResult {
  return {
    status: "ok",
    app: context.appName,
    timestamp: (context.now ?? new Date()).toISOString()
  };
}
