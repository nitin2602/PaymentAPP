import 'dotenv/config'
import express from "express";
import cors from "cors";
import apiroutes from "./routes/apiroutes.js"


import { connect } from "./db/db.js";


const app = express();
const port = process.env.PORT || 3010;
app.use(express.json());
app.use(cors());

connect();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Heyyy");
});

app.use("/api/v1/",apiroutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
