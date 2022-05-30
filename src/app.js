import express from "express";
import route from "./route";
import db from "../models";
import { config } from "dotenv";

config();

const app = express();

db.sequelize
  .sync({})
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(express.urlencoded());
app.use("/api", route);

export default app;
