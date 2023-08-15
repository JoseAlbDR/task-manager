import { NextFunction, Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

const asyncWrapper = (fn: {
  (
    req: Request<
      ParamsDictionary,
      unknown,
      unknown,
      ParsedQs,
      Record<string, unknown>
    >,
    res: Response<unknown, Record<string, unknown>>
  ): Promise<Response<unknown, Record<string, unknown>>>;
  (
    arg0: Request<
      ParamsDictionary,
      unknown,
      unknown,
      ParsedQs,
      Record<string, unknown>
    >,
    arg1: Response<unknown, Record<string, unknown>>,
    arg2: NextFunction
  ): unknown;
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
