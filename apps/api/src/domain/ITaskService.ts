import { Task } from "./tasks/Task";

export interface ITaskService {
  getAllTasks(): Promise<Task[]>;

  updateTaskStatus(id: string, status: number): Promise<Task>;
}