import { Request, Response } from "express";

const getAllTasks = (_req: Request, res: Response) => {
  res.send("All Tasks");
};

const createOneTask = (_req: Request, res: Response) => {
  res.send("Create Task");
};

const getOneTask = (req: Request, res: Response) => {
  const { taskId } = req.params;
  res.send(`Task with id ${+taskId}`);
};

const updateOneTask = (req: Request, res: Response) => {
  const { taskId } = req.params;
  res.send(`Updated Task with id ${+taskId}`);
};

const deleteOneTask = (req: Request, res: Response) => {
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
