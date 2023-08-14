import { Request, Response } from "express";
import { TypedRequestBodyParams } from "../types/generics";
import { Task } from "../models/Task";
import { BodyTask, ITask } from "../types/interfaces";
import { validateTaskData } from "../utils/validation";
import { validationError } from "../utils/validationError";
const getAllTasks = (_req: Request, res: Response) => {
  res.send("All Tasks");
};

const createOneTask = async (req: BodyTask, res: Response) => {
  const valid = validateTaskData(req.body);

  if (valid.error) {
    const messages = valid.error.details.map((detail) => detail.message);
    return res.status(400).json({ success: false, msg: messages });
  }

  try {
    const task: ITask = await Task.create(req.body);
    return res.status(201).json({ success: true, data: task });
  } catch (error) {
    const messages = validationError(error);
    if (messages)
      return res.status(400).send({ success: false, error: messages });

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
