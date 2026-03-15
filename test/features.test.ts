import { describe, expect, it } from "vitest";
import { getHealth } from "../src/features/health/health.feature.js";
import { buildWelcomeMessage } from "../src/features/welcome/welcome.feature.js";

describe("example features", () => {
  it("returns health object", () => {
    const fixedDate = new Date("2026-03-15T00:00:00.000Z");
    const result = getHealth({ appName: "RepoExample", now: fixedDate });

    expect(result).toEqual({
      status: "ok",
      app: "RepoExample",
      timestamp: "2026-03-15T00:00:00.000Z"
    });
  });

  it("builds welcome message", () => {
    expect(buildWelcomeMessage("Rimuru", "RepoExample")).toBe("Welcome Rimuru to RepoExample!");
  });
});
