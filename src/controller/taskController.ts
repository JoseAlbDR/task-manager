import { Request, Response } from "express";
import { TypedRequestBodyParams } from "../types/generics";
import { Task } from "../models/Task";
import { BodyTask } from "../types/interfaces";

const getAllTasks = (_req: Request, res: Response) => {
  res.send("All Tasks");
};

const createOneTask = async (req: BodyTask, res: Response) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
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
