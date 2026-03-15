export function buildWelcomeMessage(username: string, appName: string): string {
  const cleanUser = username.trim() || "friend";
  const cleanApp = appName.trim() || "our app";

  return `Welcome ${cleanUser} to ${cleanApp}!`;
}
