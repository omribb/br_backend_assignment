import { Router } from "express";

export const echoController = Router();

echoController.post("/", async function (req, res) {  
  res.send(req.body);
});
