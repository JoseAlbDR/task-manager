export interface ITask {
  name: string;
  completed?: boolean;
}

export interface BodyTask {
  body: ITask;
}

export class CustomError extends Error {
  constructor(
    public success: boolean,
    public message: string,
    public error?: unknown
  ) {
    super();
  }
}
