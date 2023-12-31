import { NextFunction, Request, Response } from "express";
import { CustomError } from "../types/interfaces";

const errorHandlerMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof CustomError)
    return res
      .status(err.status)
      .json({ success: err.success, message: err.message });

  // Server error
  const serverError = new CustomError("Internal server error", 500, err);
  return res.status(serverError.status).json({
    success: serverError.success,
    message: serverError.message,
    error: serverError.error,
  });
};

export default errorHandlerMiddleware;
