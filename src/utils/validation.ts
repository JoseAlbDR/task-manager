import Joi from "joi";
import { ITask } from "../types/interfaces";

export const validateTaskData = (task: unknown) => {
  const taskSchema = Joi.object<ITask>({
    name: Joi.string().max(20).required().label("Name"),
    completed: Joi.boolean().label("Completed"),
  });

  return taskSchema.validate(task, { errors: { wrap: { label: false } } });
};
