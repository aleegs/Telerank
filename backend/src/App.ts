import "module-alias/register";
require("dotenv").config();
import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import compression from "compression";

import { initializeDatabase } from "lib/DatabaseManager";
import { initializeRoutes } from "routes/RoutesManager";
import { initializeJobs } from "jobs/JobsManager";
import { initializeTelegramProto } from "scrapers/telegram-scrapers/TelegramProtoManager";
import { log } from "lib/Helpers";

// Configure app
const port = process.env.PORT || 4001;

const limiterOptions = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 150,
});

const app = express();

app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());
// app.enable('trust proxy'); // reverse proxy (heroku, nginx) https://expressjs.com/en/guide/behind-proxies.html
app.use(limiterOptions);

// Start database and Telerank's modules
initializeDatabase().then(() => {
  initializeTelegramProto();
  initializeJobs();

  // Configure Routes
  app.get("/", (req, res) => {
    res.send("OK");
  });

  initializeRoutes(app);

  // Start server
  app.listen(port, () => {
    log.info(`Server listening on port ${port}`);
  });
});
