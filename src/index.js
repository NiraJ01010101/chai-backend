// require("dotenv").config({ path: "./env" });

import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

// console.log("proc", process.env);
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server runnig port ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });
  })
  .catch((error) => {
    console.log("mongoDB faileld connection", error);
  });

//firts approch
/* const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`app is listen port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("error", error);
    throw error;
  }
})(); */
