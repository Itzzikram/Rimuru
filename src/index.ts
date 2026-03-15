import { getAppName } from "./config/env.js";
import { getHealth } from "./features/health/health.feature.js";
import { runCommand } from "./features/commands/runner.js";
import { buildWelcomeMessage } from "./features/welcome/welcome.feature.js";

function main(): void {
  const appName = getAppName();
  const health = getHealth({ appName });
  const welcome = buildWelcomeMessage("Developer", appName);
  const commandPing = runCommand("ping", "Developer");
  const commandWelcome = runCommand("welcome", "Rimuru");

  console.log("Health:", health);
  console.log("Welcome:", welcome);
  console.log("Command ping:", commandPing);
  console.log("Command welcome:", commandWelcome);
}

main();
