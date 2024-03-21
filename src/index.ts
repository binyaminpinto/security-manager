import * as express from "express";
import "dotenv/config";
import "./db";
import authRouter from "./routers/auth";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth1", authRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));