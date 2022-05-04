import { Router } from "express";
import { echoController } from "./controllers/echo";
import { pingController } from "./controllers/ping";
import { searchController } from "./controllers/search";

export const router = Router();

router.use("/api/ping", pingController);
router.use("/api/echo", echoController);
router.use("/api/search", searchController);
