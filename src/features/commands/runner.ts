import type { Command } from "../../types/command.js";
import { pingCommand } from "./ping.command.js";
import { welcomeCommand } from "./welcome.command.js";

const registry = new Map<string, Command>();

for (const command of [pingCommand, welcomeCommand]) {
  registry.set(command.name, command);
}

export function runCommand(name: string, username: string): string {
  const command = registry.get(name);
  if (!command) {
    return "Unknown command.";
  }

  return command.execute({
    userId: "example-user-id",
    username
  });
}
