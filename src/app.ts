import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { router } from "./router";

dotenv.config();

const app = express();

app.use(morgan("combined"));
app.use(express.json());
app.use(router);

app.listen(3000);
