import { Request, Response } from "express";

const getAllTasks = (_req: Request, res: Response) => {
  res.send("All Tasks");
};

const createOneTask = (_req: Request, res: Response) => {
  res.send("Create Task");
};

export default { getAllTasks, createOneTask };
