import cors from "cors";
import express, { Application, Request, Response } from "express";
import { userRoutes } from "./app/modules/user/user.route";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to the basic route & API testing");
});

export default app;
