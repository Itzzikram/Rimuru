import express from "express";
import { pingRouter } from "./features/api/ping.route.js";

export function createApp() {
  const app = express();

  app.use(express.json());
  app.use("/api", pingRouter);

  return app;
}
