// src/application/TaskService.ts
import { ITaskRepository } from "../domain/tasks/ITaskRepository";
import { Task } from "../domain/tasks/Task";
import { inject, injectable } from "tsyringe";
import { ITaskService } from "../domain/ITaskService";

@injectable()
export class TaskService implements ITaskService {
  constructor(
     @inject("ITaskRepository") private readonly taskRepo: ITaskRepository) {}

  async getAllTasks(): Promise<Task[]> {
    return await this.taskRepo.findAll();
  }

   async updateTaskStatus(id: string, status: number): Promise<Task> {
    return await this.taskRepo.updateStatus(id, status);
  }
}