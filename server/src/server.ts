import express from "express";
import { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", async (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello world!" })
})

app.listen(4000, () => {
  console.log("Listening on port 4000")
})