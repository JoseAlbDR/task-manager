export interface ITask {
  name: string;
  completed?: boolean;
}

export interface BodyTask {
  body: ITask;
}
