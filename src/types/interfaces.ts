export interface ITask {
  name: string;
  completed?: boolean;
}

export interface BodyTask {
  body: ITask;
}

export class CustomError extends Error {
  success: boolean;
  constructor(public message: string, public error?: unknown) {
    super();
    this.success = false;
  }
}
