import express from "express";
import { logger } from "./logger.js";
import { SeverityNumber } from "@opentelemetry/api-logs";

const app = express();
const env = process.env.NODE_ENV || "development";

app.get("/info", (req, res) => {
  logger.emit({
    severityNumber: SeverityNumber.INFO,
    severityText: "INFO",
    body: "path: '/info'",
    attributes: {
      env,
    },
  });

  res.send("Hello World!");
});

app.get("/warn", (req, res) => {
  logger.emit({
    severityNumber: SeverityNumber.WARN,
    severityText: "WARN",
    body: "path: '/warn'",
    attributes: {
      env,
    },
  });

  res.send("Hello World!");
});

app.get("/error", (req, res) => {
  logger.emit({
    severityNumber: SeverityNumber.ERROR,
    severityText: "ERROR",
    body: "path: '/error'",
    attributes: {
      env,
    },
  });

  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("app listening on port 3000!");
});
