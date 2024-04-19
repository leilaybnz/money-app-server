import express, { Request, Response } from "express";
import { router } from "./routes/accountRoutes";

const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome!");
});

app.use("/savingsAccount", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
