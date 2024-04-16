import express from "express";

const app = express();

import cookieparser from "cookie-parser";

import "dotenv/config";

import cors from "cors";

const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json({ limit: "15kb" }));

app.use(express.urlencoded({ extended: true, limit: "15kb" }));

app.use(express.static("public"));

app.use(cookieparser());

export { app, port };
