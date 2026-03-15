export type CommandContext = {
  userId: string;
  username: string;
};

export type Command = {
  name: string;
  description: string;
  execute: (context: CommandContext) => string;
};
