import { Request, Response } from "express";
import { TypedRequestBody } from "../types/generics";

const getAllTasks = (_req: Request, res: Response) => {
  res.send("All Tasks");
};

const createOneTask = (_req: Request, res: Response) => {
  res.send("Create Task");
};

const getOneTask = (req: Request<{ taskId: string }>, res: Response) => {
  const { taskId } = req.params;
  res.send(`Task with id ${+taskId}`);
};

const updateOneTask = (
  req: TypedRequestBody<{ name: string }, { taskId: string }>,
  res: Response
) => {
  const { taskId } = req.params;
  const { name } = req.body;

  res.send(`Updated Task with id ${+taskId}, name: ${name}`);
};

const deleteOneTask = (req: Request<{ taskId: string }>, res: Response) => {
  const { taskId } = req.params;
  res.send(`Deleted Task with id ${+taskId}`);
};

export default {
  getAllTasks,
  createOneTask,
  getOneTask,
  updateOneTask,
  deleteOneTask,
};
