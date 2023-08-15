import express from "express";
import tasksRouter from "./routes/tasks";
import dbConnect from "./database/connect";
import cors from "cors";

const app = express();
const port = process.env.PORT;
const allowedOrigins = ["http://127.0.0.1:5500"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

// middleware
app.use(express.json());
app.use(cors(options));
app.use(express.static("./public"));

// routes
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
