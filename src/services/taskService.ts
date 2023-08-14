import { Task } from "../models/Task";
import { ITask } from "../types/interfaces";

const createOneTask = async (newTask: ITask) => {
  try {
    const isAlreadyAdded = await Task.findOne({
      name: newTask.name,
    });

    if (isAlreadyAdded) {
      throw { success: false, message: "Task already added" };
    }

    const createdTask: ITask = await Task.create(newTask);
    return createdTask;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default { createOneTask };
