import { Request, Response } from "express";
import { TypedRequestBodyParams } from "../types/generics";
import { BodyTask, ITask, CustomError } from "../types/interfaces";
import { validateTaskData } from "../utils/validation";
import taskService from "../services/taskService";

const getAllTasks = async (_req: Request, res: Response) => {
  try {
    const allTasks = await taskService.getAllTasks();
    return res.status(200).json({ success: true, tasks: allTasks });
  } catch (error) {
    // Server error
    const serverError = new CustomError("Internal server error", error);
    return res.status(500).json(serverError);
  }
};

const createOneTask = async (req: BodyTask, res: Response) => {
  // Validate req.body with Joi
  const valid = validateTaskData(req.body);

  // Joi validation errors
  if (valid.error) {
    const messages = valid.error.details.map(
      (detail): string => detail.message
    );
    //Bad Request error
    return res.status(400).json({ success: false, msg: messages });
  }

  // If no Joi validation errors
  try {
    const task: ITask = await taskService.createOneTask(req.body);
    return res.status(201).json({ success: true, data: task });
  } catch (error) {
    // Mongoose Validation or Already Exist error
    if (error instanceof CustomError) return res.status(400).json(error);

    // Server error
    const serverError = new CustomError("Internal server error", error);
    return res.status(500).json(serverError);
  }
};

const getOneTask = async (req: Request<{ taskId: string }>, res: Response) => {
  try {
    const { taskId } = req.params;
    const foundTask = await taskService.getOneTask(taskId);
    return res.status(200).json({ success: true, task: foundTask });
  } catch (error) {
    // Not found error
    if (error instanceof CustomError) return res.status(404).json(error);

    // Server error
    const serverError = new CustomError("Internal server error", error);
    return res.status(500).json(serverError);
  }
};

const updateOneTask = async (
  req: TypedRequestBodyParams<
    { name: string; completed: boolean },
    { taskId: string }
  >,
  res: Response
) => {
  try {
    const { taskId } = req.params;
    const { name, completed } = req.body;
    const updatedTask = await taskService.updateOneTask(taskId, {
      name,
      completed,
    });
    return res.status(200).json({ task: updatedTask });
  } catch (error) {
    // Not found error
    if (error instanceof CustomError) return res.status(404).json(error);

    // Server error
    const serverError = new CustomError("Internal server error", error);
    return res.status(500).json(serverError);
  }
};

const deleteOneTask = async (
  req: Request<{ taskId: string }>,
  res: Response
) => {
  try {
    const { taskId } = req.params;
    const deleteResult = await taskService.deleteOneTask(taskId);
    return res
      .status(200)
      .json({ success: true, count: deleteResult.deletedCount });
  } catch (error) {
    // Not found error
    if (error instanceof CustomError) return res.status(404).json(error);

    // Server error
    const serverError = new CustomError("Internal server error", error);
    return res.status(500).json(serverError);
  }
};

export default {
  getAllTasks,
  createOneTask,
  getOneTask,
  updateOneTask,
  deleteOneTask,
};
