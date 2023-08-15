import { Task } from "../models/Task";
import { CustomError, ITask } from "../types/interfaces";

const getAllTasks = async (): Promise<ITask[]> => {
  try {
    const tasks: ITask[] = await Task.find({});
    return tasks;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getOneTask = async (taskId: string): Promise<ITask> => {
  try {
    const task = await Task.findById(taskId);
    if (!task) throw new CustomError(`Task with id ${taskId} not found`, 404);
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
      throw new CustomError("Task already exist in database", 409);
    }

    const createdTask: ITask = await Task.create(newTask);
    return createdTask;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateOneTask = async (taskId: string, task: ITask): Promise<ITask> => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(taskId, task, {
      new: true,
      runValidators: true,
    });

    if (!updatedTask)
      throw new CustomError(`Task with id ${taskId} does not exist`, 404);

    return updatedTask;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteOneTask = async (taskId: string) => {
  try {
    const deleteResult = await Task.deleteOne({ _id: taskId });
    if (!deleteResult.deletedCount)
      throw new CustomError(`Task with id ${taskId} could not be found`, 404);
    return deleteResult;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  createOneTask,
  getAllTasks,
  getOneTask,
  deleteOneTask,
  updateOneTask,
};
