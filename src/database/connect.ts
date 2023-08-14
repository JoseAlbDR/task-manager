import "dotenv/config";
import mongoose from "mongoose";

const dbConnect = async () => {
  const connectionString = process.env.MONGO_URI as string;
  return mongoose.connect(connectionString);
};

export default dbConnect;
