import mongoose from "mongoose";
import { ITask } from "../types/interfaces";

const taskSchema = new mongoose.Schema<ITask>({
  name: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

export const Task = mongoose.model<ITask>("Task", taskSchema);
