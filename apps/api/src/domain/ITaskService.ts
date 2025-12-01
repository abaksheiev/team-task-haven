import { Task } from "./tasks/Task";

export interface ITaskService {
  updateTask(id: string, title: any, description: any): Promise<Task>;
  getAllTasks(): Promise<Task[]>;

  updateTaskStatus(id: string, rawStatus: string): Promise<Task>;

}