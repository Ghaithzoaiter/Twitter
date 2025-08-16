import express from "express";
import { ENV } from "./config/env";
import { connectDB } from "./config/db.js";

const app = express();

connectDB();

app.get("/",(req,res) => res.send("Hello World from the server"))

app.listen(ENV.port, () => console.log("server is up and running on port:",ENV.PORT));
