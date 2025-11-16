// src/application/TaskService.ts
import { TaskRepository } from "../domain/tasks/TaskRepository";
import { TaskId } from "../domain/tasks/TaskId";
import { Comment } from "../domain/tasks/Comment";

export class TaskService {
  constructor(private readonly taskRepo: TaskRepository) {}

  async addComment(taskId: TaskId, comment: Comment): Promise<void> {
    const task = await this.taskRepo.findById(taskId);
    if (!task) throw new Error("Task not found");
    task.addComment(comment);
    await this.taskRepo.save(task);
  }
}