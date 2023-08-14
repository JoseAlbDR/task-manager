import { Request, Response } from "express";
import { TypedRequestBody } from "../types/generics";

const getAllTasks = (_req: Request, res: Response) => {
  res.send("All Tasks");
};

const createOneTask = (req: Request, res: Response) => {
  res.json(req.body);
};

const getOneTask = (req: Request<{ taskId: string }>, res: Response) => {
  const { taskId } = req.params;
  res.json({ id: taskId });
};

const updateOneTask = (
  req: TypedRequestBody<{ name: string }, { taskId: string }>,
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
