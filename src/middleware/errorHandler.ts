import { NextFunction, Request, Response } from "express";
import { CustomError } from "../types/interfaces";

const errorHandlerMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  // Mongoose Validation or Already Exist error
  if (err instanceof CustomError) return res.status(400).json(err);

  // Server error
  const serverError = new CustomError("Internal server error", err);
  return res.status(500).json(serverError);
};

export default errorHandlerMiddleware;
