import express, { Request, Response } from "express";
import tasksRouter from "./routes/tasks";
import dbConnect from "./database/connect";

const app = express();
const port = 3000;

// middleware
app.use(express.json());

// routes
app.get("/hello", (_req: Request, res: Response) => {
  res.send("Hello there!");
});

app.use("/api/v1/tasks", tasksRouter);

const start = async () => {
  try {
    await dbConnect();
    console.log("CONNECTED TO THE DB...");
    app.listen(port, () => {
      console.log(`Server is listening on ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

void start();
