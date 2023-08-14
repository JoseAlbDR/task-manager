import mongoose from "mongoose";
import { ITask } from "../types/interfaces";

const taskSchema = new mongoose.Schema<ITask>({
  name: String,
  completed: Boolean,
});

export const Task = mongoose.model<ITask>("Task", taskSchema);
