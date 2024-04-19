import express, { Request, Response } from "express";

const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the RESTful API!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
