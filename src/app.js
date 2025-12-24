import express from "express";
import { router as apiroutes } from "./routes/index.js";

export const app = express();

app.use(express.json());

app.use("/api", apiroutes)