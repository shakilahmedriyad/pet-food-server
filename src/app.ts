import dotenv from "dotenv";
import express from "express";
import router from "./routes/route";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);

mongoose.set("strictQuery", false);
//@ts-ignore
mongoose.connect(process.env.DB_URL).then((ms: any) => console.log("success"));

export default app;
