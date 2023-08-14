import "dotenv/config";
import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connectionString = process.env.MONGO_URI as string;
    await mongoose.connect(connectionString);
    console.log("CONNECTED TO THE DB...");
  } catch (err) {
    console.log(err);
  }
};

export default dbConnect;
