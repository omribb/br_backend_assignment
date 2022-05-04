import { Router } from "express";

export const pingController = Router();

pingController.get("/", async function (_, res) {
  res.send("pong");
});
