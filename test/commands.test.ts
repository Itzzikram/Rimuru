import { describe, expect, it } from "vitest";
import { runCommand } from "../src/features/commands/runner.js";

describe("command runner", () => {
  it("runs ping command", () => {
    expect(runCommand("ping", "Rimuru")).toBe("Pong! Bot is online.");
  });

  it("runs welcome command", () => {
    expect(runCommand("welcome", "Rimuru")).toBe("Welcome, Rimuru!");
  });

  it("handles unknown command", () => {
    expect(runCommand("missing", "Rimuru")).toBe("Unknown command.");
  });
});
