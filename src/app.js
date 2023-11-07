import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" })); //get json data limit
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); //store catche data

app.use(cookieParser()); // store cookies user side

export { app };
