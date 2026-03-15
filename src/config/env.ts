export function getAppName(): string {
  const raw = process.env.APP_NAME;
  if (!raw || raw.trim().length === 0) {
    return "ExampleApp";
  }

  return raw.trim();
}
