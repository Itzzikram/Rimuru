export type FeatureContext = {
  appName: string;
  now?: Date;
};

export type HealthResult = {
  status: "ok";
  app: string;
  timestamp: string;
};
