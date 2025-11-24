import { Task } from "./tasks/Task";

export interface ITaskService {
  getAllTasks(): Promise<Task[]>;
}