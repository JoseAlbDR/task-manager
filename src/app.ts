import express, { Request, Response } from "express";
import tasksRouter from "./routes/tasks";
const app = express();
const port = 3000;

// routes
app.get("/hello", (_req: Request, res: Response) => {
  res.send("Hello there!");
});

app.use("/api/v1/tasks", tasksRouter);

app.listen(port, () => {
  console.log(`Server is listening on ${port}...`);
});
