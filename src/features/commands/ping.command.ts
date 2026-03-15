import type { Command } from "../../types/command.js";

export const pingCommand: Command = {
  name: "ping",
  description: "Checks bot latency status.",
  execute: () => "Pong! Bot is online."
};
