// This file is the entry point to the server app
import express from "express";
import Connection from "./database/db.js";
import Routes from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
// making express server - first use listen()
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Routes);
Connection();
app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
