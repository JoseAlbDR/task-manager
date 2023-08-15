export interface ITask {
  name: string;
  completed?: boolean;
}

export interface BodyTask {
  body: ITask;
}

export class CustomError extends Error {
  success: boolean;
  constructor(
    public message: string,
    public status: number,
    public error?: object
  ) {
    super();
    this.success = false;
  }
}
