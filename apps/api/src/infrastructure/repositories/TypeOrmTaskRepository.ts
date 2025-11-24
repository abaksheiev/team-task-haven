import { injectable } from "tsyringe";
import { Task } from "../../domain/tasks/Task";
import { AppDataSource } from "../db/dataSource";
import { TaskEntity } from "../db/entities/TaskEntity";
import { TaskId } from "../../domain/tasks/TaskId";
import { TaskTitle } from "../../domain/tasks/TaskTitle";
import { UserId } from "../../domain/teams/UserId";
import { ITaskRepository } from "../../domain/tasks/ITaskRepository";


@injectable()
export class TypeOrmTaskRepository implements ITaskRepository 
{
    findById(id: TaskId): Promise<Task | null> {
      throw new Error("Method not implemented.");
    }
    
    save(task: Task): Promise<void> {
      throw new Error("Method not implemented.");
    } 

    async findAll(): Promise<Task[]> {
        const rows = await AppDataSource.getRepository(TaskEntity).find();
        return rows.map(row => new Task(new TaskId(row.id), new TaskTitle( row.title), row.description, row.status, new UserId(row.assigneeId)));
  }
}

 