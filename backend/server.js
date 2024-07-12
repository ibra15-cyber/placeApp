import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import placeRouter from "./routes/placeRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";
import { isAuth } from "./util.js";

const app = express();
app.use(express.json());

dotenv.config();

app.get("/api/keys/google", isAuth, (req, res) => {
  res.send({ key: process.env.GOOGLE_API_KEY || "" });
});

app.use("/api/users", userRouter);
app.use("/api/places", placeRouter);
app.use("/api/upload", uploadRouter);

const port = 4000;
app.listen(port);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() =>
    console.log(`connection established to ${process.env.MONGODB_URI}`)
  )
  .catch((err) => {
    console.log(err.message);
  });
