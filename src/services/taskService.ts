import { Task } from "../models/Task";
import { ITask } from "../types/interfaces";
import { validationError } from "../utils/validationError";

const createOneTask = async (newTask: ITask) => {
  try {
    const isAlreadyAdded = await Task.findOne({
      name: newTask.name,
    });

    // If the task already exists
    if (isAlreadyAdded) {
      throw { success: false, message: "Task already exist in database" };
    }

    const createdTask: ITask = await Task.create(newTask);
    return createdTask;
  } catch (error) {
    const messages = validationError(error);

    // Mongoose validation error
    if (messages.length > 0) {
      throw { success: false, message: messages };
    }

    // Another error occurred
    throw error;
  }
};

export default { createOneTask };
