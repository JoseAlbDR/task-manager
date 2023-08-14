import Joi from "joi";
import { ITask } from "../types/interfaces";

export const validateTaskData = (task: ITask) => {
  const taskSchema = Joi.object<ITask>({
    name: Joi.string().max(20).required().messages({
      "string.max": "Name can not be more than 20 characters",
    }),
    completed: Joi.boolean(),
  });

  return taskSchema.validate(task, { errors: { wrap: { label: false } } });
};
