import { Request, Response } from "express";

const getAllTasks = (_req: Request, res: Response) => {
  return res.send("All Tasks");
};

export default { getAllTasks };
