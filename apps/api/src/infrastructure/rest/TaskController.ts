import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { ITaskService } from "../../domain/ITaskService";
import { TaskMapper } from "../../application/mappers/TaskMapper";
import { Console } from "console";

@injectable()
export class TaskController {
  constructor(@inject("ITaskService") private readonly taskService: ITaskService) {}

  async getAllTasks(req: Request, res: Response) {
    const tasks = await this.taskService.getAllTasks();
    res.json(TaskMapper.toDtoList(tasks));
  }

   async updateTaskStatus(req: Request, res: Response) {
    
     try {
      const { id } = req.params;
      const { status } = req.body;

      if (!status) {
        res.status(400).json({ error: "status is required" });
        return;
      }

     let statusNum = 1;

    switch (`${status}`) {
      case "Todo" :
        statusNum = 1;
        break;
      case "In Progress":
         statusNum = 2;
         break;
      case "In Review":
         statusNum = 3;
         break;
      case "Done":
         statusNum = 4;
         break;
      default:
        console.log("Unknown status")
        break; "";
    }
 
      const updatedTask = await this.taskService.updateTaskStatus(id, statusNum);

      res.json(TaskMapper.toDto(updatedTask));

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}