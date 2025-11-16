import { Task } from "./Task";
import { TaskId } from  "./TaskId"

export interface TaskRepository {
  findById(id: TaskId): Promise<Task | null>;
  save(task: Task): Promise<void>;
}