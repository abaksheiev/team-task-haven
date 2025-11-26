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
    async findById(id: TaskId): Promise<Task | null> {
        const row = await AppDataSource.getRepository(TaskEntity).findOneBy({
            id: id.getValue()?.toString()
        });

        if (!row) return null;

        return new Task(
            new TaskId(row.id),
            new TaskTitle(row.title),
            row.description,
            row.status,
            new UserId(row.assigneeId) 
        );
    }
    
     async save(task: Task): Promise<void> {
        const repo = AppDataSource.getRepository(TaskEntity);
        const entity = repo.create({
            id: task.getId().getValue()?.toString(),
            title: task.getTitle(),
            description: task.getDescription(),
            status: task.getStatusValue() 
        });
        await repo.save(entity);
    } 

    async findAll(): Promise<Task[]> {
        const rows = await AppDataSource.getRepository(TaskEntity).find();
        return rows.map(row => new Task(
          new TaskId(row.id), 
          new TaskTitle( row.title), 
          row.description, 
          row.status, 
          new UserId(row.assigneeId)));
    }
    async updateStatus(id: string, status: number): Promise<Task> {
       const repo = AppDataSource.getRepository(TaskEntity);
       await repo.update({ id }, { status });

       const updated = await repo.findOneBy({ id });
        if (!updated) {
            throw new Error(`Task with id ${id} not found`);
        }

        return new Task(
            new TaskId(updated.id),
            new TaskTitle(updated.title),
            updated.description,
            updated.status,
            new UserId(updated.assigneeId) 
        );
    }
}

 