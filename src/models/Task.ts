import mongoose from "mongoose";
import { ITask } from "../types/interfaces";

const taskSchema = new mongoose.Schema<ITask>({
  name: {
    type: String,
    required: [true, "Must provide a name"],
    trim: true,
    maxlength: [20, "Name can not be more than 20 characters"],
  },
  completed: { type: Boolean, required: true },
});

export const Task = mongoose.model<ITask>("Task", taskSchema);
