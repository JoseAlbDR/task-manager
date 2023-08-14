import Joi from "joi";
import { ITask } from "../types/interfaces";

export const validateTaskData = (task: ITask) => {
  const taskSchema = Joi.object<ITask>({
    name: Joi.string().required(),
    completed: Joi.boolean(),
  });

  return taskSchema.validate(task);
};
