import express from "express";
import cors from "cors";
import tasksRouter from "./routes/tasks";
import dbConnect from "./database/connect";
import notFound from "./middleware/notFound";
import errorHandlerMiddleware from "./middleware/errorHandler";

const app = express();
const port = process.env.PORT;
const allowedOrigins = ["http://127.0.0.1:3000"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

// middleware
app.use(express.json());
app.use(cors(options));
app.use(express.static("./public"));

// routes
app.use("/api/v1/tasks", tasksRouter);
app.use("*", notFound);
app.use(errorHandlerMiddleware);

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
