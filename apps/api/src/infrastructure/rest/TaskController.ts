import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { ITaskService } from "../../domain/ITaskService";
import { TaskMapper } from "../../application/mappers/TaskMapper";

@injectable()
export class TaskController {
  constructor(@inject("ITaskService") private readonly taskService: ITaskService) {}

  async getAllTasks(req: Request, res: Response) {
    const tasks = await this.taskService.getAllTasks();
    res.json(TaskMapper.toDtoList(tasks));
  }
}