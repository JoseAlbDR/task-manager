import { Error } from "mongoose";

export const validationError = (error: unknown): string => {
  if (error instanceof Error.ValidationError) {
    const messages = Object.values(error.errors).map((err) => err.message);
    return messages.join(" - ");
  } else {
    return "";
  }
};
