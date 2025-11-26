import { Task } from "./Task";
import { TaskId } from  "./TaskId"

export interface ITaskRepository {
  findById(id: TaskId): Promise<Task | null>;
  save(task: Task): Promise<void>;
  findAll(): Promise<Task[]>;
  updateStatus(id: string, status: number): Promise<Task>;
}