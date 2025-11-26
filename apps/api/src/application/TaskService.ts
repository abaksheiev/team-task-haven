// src/application/TaskService.ts
import { ITaskRepository } from "../domain/tasks/ITaskRepository";
import { Task } from "../domain/tasks/Task";
import { inject, injectable } from "tsyringe";
import { ITaskService } from "../domain/ITaskService";
import { TaskStatus } from "../domain/tasks/TaskStatus";
import { TaskId } from "../domain/tasks/TaskId";

@injectable()
export class TaskService implements ITaskService {
  constructor(
    @inject("ITaskRepository") private readonly taskRepo: ITaskRepository
  ) {}

  async getAllTasks(): Promise<Task[]> {
    return await this.taskRepo.findAll();
  }

  async updateTaskStatus(id: string, rawStatus: string): Promise<Task> {
    const taskId = new TaskId(id);

    if (!TaskStatus.isAllowed(rawStatus)) {
      throw new Error(`Invalid status: ${rawStatus}`);
    }

    const newStatus = new TaskStatus(rawStatus);

    const task = await this.taskRepo.findById(taskId);
    if (!task) throw new Error("Task not found");

    task.changeStatus(newStatus);

    await this.taskRepo.save(task);

    return task;
  }
}
