import express from "express";
import { getCurrentFloodWait } from "scrapers/telegram-proto/TelegramProto";
import { getRunningJobs } from "scrapers/jobs/ScraperJobsManager";

export function initialize(router: express.Router): void {
  router.route(`/jobs`).get((req: express.Request, res: express.Response) => {
    getCurrentFloodWait().then((result: number) => {
      res
        .status(200)
        .send({ FLOOD_WAIT: result, runningJobs: getRunningJobs() });
    });
  });
}
