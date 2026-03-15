import type { Command } from "../../types/command.js";

export const welcomeCommand: Command = {
  name: "welcome",
  description: "Greets the command caller.",
  execute: (context) => `Welcome, ${context.username}!`
};
