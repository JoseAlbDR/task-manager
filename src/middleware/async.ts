import { NextFunction, Request, Response } from "express";

const asyncWrapper = (fn: {
  (req: Request, res: Response): Promise<Response>;
  (arg0: Request, arg1: Response, arg2: NextFunction): unknown;
}) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default asyncWrapper;
