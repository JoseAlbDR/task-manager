import { Task } from "../models/Task";
import { ITask } from "../types/interfaces";

const createOneTask = async (newTask: ITask) => {
  const taskToInsert: ITask = {
    ...newTask,
    completed: newTask?.completed ? newTask.completed : false,
  };

  try {
    const isAlreadyAdded = await Task.findOne({
      name: taskToInsert.name,
    });

    if (isAlreadyAdded) {
      throw { success: false, message: "Task already added" };
    }

    const createdTask: ITask = await Task.create(taskToInsert);
    return createdTask;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default { createOneTask };
