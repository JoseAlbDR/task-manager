import { Request, Response } from "express";
import { ITask } from "../types/interfaces";
import { validateTaskData } from "../utils/validation";
import taskService from "../services/taskService";
import asyncWrapper from "../middleware/asyncWrapper";

const getAllTasks = asyncWrapper(async (_req: Request, res: Response) => {
  const allTasks = await taskService.getAllTasks();
  return res.status(200).json({ success: true, tasks: allTasks });
});

const createOneTask = asyncWrapper(async (req: Request, res: Response) => {
  // Validate req.body with Joi
  const valid = validateTaskData(req.body);

  // Joi validation errors
  if (valid.error) {
    const messages = valid.error.details.map(
      (detail): string => detail.message
    );
    //Bad Request error
    return res
      .status(400)
      .json({ success: false, message: messages.join(", ") });
  }

  // If no Joi validation errors
  const task: ITask = await taskService.createOneTask(req.body as ITask);
  return res.status(201).json({ success: true, task });
});

const getOneTask = asyncWrapper(async (req: Request, res: Response) => {
  const { taskId } = req.params;
  const foundTask = await taskService.getOneTask(taskId);
  return res.status(200).json({ success: true, task: foundTask });
});

const updateOneTask = asyncWrapper(async (req: Request, res: Response) => {
  // Validate req.body with Joi
  const valid = validateTaskData(req.body);

  // Joi validation errors
  if (valid.error) {
    const messages = valid.error.details.map(
      (detail): string => detail.message
    );
    //Bad Request error
    return res
      .status(400)
      .json({ success: false, message: messages.join(", ") });
  }

  const { taskId } = req.params;
  const { name, completed } = req.body as ITask;
  const updatedTask = await taskService.updateOneTask(taskId, {
    name,
    completed,
  });
  return res.status(200).json({ task: updatedTask });
});

const deleteOneTask = asyncWrapper(async (req: Request, res: Response) => {
  const { taskId } = req.params;
  const deleteResult = await taskService.deleteOneTask(taskId);
  return res
    .status(200)
    .json({ success: true, count: deleteResult.deletedCount });
});

export default {
  getAllTasks,
  createOneTask,
  getOneTask,
  updateOneTask,
  deleteOneTask,
};
