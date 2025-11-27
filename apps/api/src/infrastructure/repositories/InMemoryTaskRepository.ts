import { injectable } from "tsyringe";
import { ITaskRepository } from "../../domain/tasks/ITaskRepository";
import { Task } from "../../domain/tasks/Task";
import { TaskId } from "../../domain/tasks/TaskId";
import { TaskStatus } from "../../domain/tasks/TaskStatus";
import { TaskTitle } from "../../domain/tasks/TaskTitle";

 

@injectable()
export class InMemoryTaskRepository implements ITaskRepository {
  private tasks: Task[];

  constructor() {
    this.tasks = [
        new Task( 
            new TaskId("guid1"), 
            new TaskTitle("title"), 
            "This is a demo",
            TaskStatus.fromString("in_progress")
        ),
        new Task( 
            new TaskId("guid2"), 
            new TaskTitle("title"), 
            "This is a demo",
            TaskStatus.fromString("in_progress")
        ),
        new Task( 
            new TaskId("guid3"), 
            new TaskTitle("title"), 
            "This is a demo",
            TaskStatus.fromString("in_progress")
        )
    ];
  }

  async findAll(): Promise<Task[]> {
    return [...this.tasks];
  }

  async findById(id: TaskId): Promise<Task | null> {
    return null;
  }

  async save(task: Task): Promise<void> {

    const idx = this.tasks.findIndex(t => t.id === task.id);
    if (idx >= 0) {
      this.tasks[idx] = task;
    } else {
      this.tasks.push(task);
    }
  }
}