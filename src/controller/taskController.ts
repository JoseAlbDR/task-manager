import { Request, Response } from "express";
import { TypedRequestBodyParams } from "../types/generics";
import { BodyTask, ITask, CustomError } from "../types/interfaces";
import { validateTaskData } from "../utils/validation";
import taskService from "../services/taskService";
const getAllTasks = async (_req: Request, res: Response) => {
  try {
    const allTasks = await taskService.getAllTasks();
    res.status(200).json(allTasks);
  } catch (error) {
    console.log(error);
    if (error instanceof CustomError) res.status(500).json(error);
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
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
  }
};

const getOneTask = (req: Request<{ taskId: string }>, res: Response) => {
  const { taskId } = req.params;
  res.json({ id: taskId });
};

const updateOneTask = (
  req: TypedRequestBodyParams<{ name: string }, { taskId: string }>,
  res: Response
) => {
  const { taskId } = req.params;
  const { name } = req.body;

  res.json({ id: taskId, name });
};

const deleteOneTask = (req: Request<{ taskId: string }>, res: Response) => {
  const { taskId } = req.params;
  res.json({ id: taskId });
};

export default {
  getAllTasks,
  createOneTask,
  getOneTask,
  updateOneTask,
  deleteOneTask,
};
