import { Task } from "../models/Task";
import { CustomError, ITask } from "../types/interfaces";
import { validationError } from "../utils/validationError";

const getAllTasks = async (): Promise<ITask[]> => {
  try {
    const tasks: ITask[] = await Task.find({});
    return tasks;
  } catch (error) {
    console.log(error);
    throw new CustomError(false, "Error loading tasks from database", error);
  }
};

const createOneTask = async (newTask: ITask): Promise<ITask> => {
  try {
    const isAlreadyAdded = await Task.findOne({
      name: newTask.name,
    });

    // If the task already exists
    if (isAlreadyAdded) {
      throw new CustomError(false, "Task already exist in database");
    }

    const createdTask: ITask = await Task.create(newTask);
    return createdTask;
  } catch (error) {
    const message = validationError(error);

    // Mongoose validation error
    if (message) {
      throw new CustomError(false, message);
    }

    // Another error occurred
    throw error;
  }
};

export default { createOneTask, getAllTasks };
