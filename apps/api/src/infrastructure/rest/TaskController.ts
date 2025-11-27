import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { ITaskService } from "../../domain/ITaskService";
import { TaskMapper } from "../../application/mappers/TaskMapper";

@injectable()
export class TaskController {
  constructor(
    @inject("ITaskService") private readonly taskService: ITaskService
  ) {}

  async getAllTasks(req: Request, res: Response) {
    try {
      const tasks = await this.taskService.getAllTasks();
      res.json(TaskMapper.toDtoList(tasks));
    } catch (error) {
      console.error("ERROR in getAllTasks:", error);
      res.status(500).json({ error: String(error) });
    }
  }

  async updateTaskStatus(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      if (!status) {
        res.status(400).json({ error: "status is required" });
        return;
      }

      const updatedTask = await this.taskService.updateTaskStatus(id, status);

      res.json(TaskMapper.toDto(updatedTask));
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
