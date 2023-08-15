import { Task } from "../models/Task";
import { CustomError, ITask } from "../types/interfaces";
import { validationError } from "../utils/validationError";

const getAllTasks = async (): Promise<ITask[]> => {
  try {
    const tasks: ITask[] = await Task.find({});
    return tasks;
  } catch (error) {
    console.log(error);
    throw new CustomError("Error loading tasks from database", error);
  }
};

const getOneTask = async (taskId: string): Promise<ITask> => {
  try {
    const task = await Task.findById(taskId);
    if (!task) throw new CustomError("Task not found");
    console.log(task);
    return task;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const createOneTask = async (newTask: ITask): Promise<ITask> => {
  try {
    const isAlreadyAdded = await Task.findOne({
      name: newTask.name,
    });

    // If the task already exists
    if (isAlreadyAdded) {
      throw new CustomError("Task already exist in database");
    }

    const createdTask: ITask = await Task.create(newTask);
    return createdTask;
  } catch (error) {
    const message = validationError(error);

    // Mongoose validation error
    if (message) {
      throw new CustomError(message);
    }

    // Another error occurred
    throw error;
  }
};

export default { createOneTask, getAllTasks, getOneTask };
