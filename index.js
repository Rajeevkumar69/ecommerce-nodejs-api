import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from "helmet";
const arg = process.argv;

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());


app.get("", (req, res) => {
  res.send("Hello World!");
});

app.listen(arg[2], () => {
     console.log(`Server runiing on ${arg[2]}`);
});