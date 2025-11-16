# team-task-haven

Project idea: Team Task Manager

Recommended stack: Node.js, Nest.js, GraphQL, PostgreSQL, WebSocket
# Structura
```
Frontend (React)
        |
        v
Controller / Routes (Express)
        |
        v
Service (busness logic)
        |
        v
Repository (access to DB)
        |
        v
Database (PostgreSQL)
```


```
src/
  domain/
    boards/
      Board.ts
      List.ts
      BoardId.ts
      ListId.ts
      BoardRepository.ts
    tasks/
      Task.ts
      TaskId.ts
      TaskTitle.ts
      Comment.ts
      CommentId.ts
      Attachment.ts
      AttachmentId.ts
      DueDate.ts
      TaskRepository.ts
    teams/
      Team.ts
      TeamId.ts
      User.ts
      UserId.ts
      TeamRepository.ts
    activities/
      Activity.ts
      ActivityType.ts
      ActivityId.ts
      ActivityRepository.ts
    shared/
      DomainEvent.ts
      Entity.ts
      ValueObject.ts
  application/
    BoardService.ts
    TaskService.ts
    TeamService.ts
  infrastructure/
    repositories/
      InMemoryBoardRepository.ts
      InMemoryTaskRepository.ts
      InMemoryTeamRepository.ts
```

2. Entities and Value Objects
User as an Entity

// src/domain/teams/User.ts
import { UserId } from "./UserId";
```
export class User {
  constructor(
    private readonly id: UserId,
    private username: string,
    private email: string,
    private avatarUrl?: string
  ) {}

  changeEmail(newEmail: string) {
    this.email = newEmail;
  }

  getId(): UserId {
    return this.id;
  }
}
```

UserId as a Value Object
```
// src/domain/teams/UserId.ts
export class UserId {
  constructor(private readonly value: number) {}
  equals(other: UserId): boolean {
    return this.value === other.value;
  }
}
```
Task Aggregate
```
// src/domain/tasks/Task.ts
import { TaskId } from "./TaskId";
import { TaskTitle } from "./TaskTitle";
import { UserId } from "../teams/UserId";
import { Comment } from "./Comment";
import { Attachment } from "./Attachment";
import { DueDate } from "./DueDate";

export class Task {
  constructor(
    private id: TaskId,
    private title: TaskTitle,
    private description?: string,
    private assignees: UserId[] = [],
    private dueDate?: DueDate,
    private isCompleted: boolean = false,
    private comments: Comment[] = [],
    private attachments: Attachment[] = []
  ) {}

  assignTo(userId: UserId) {
    if (!this.assignees.find(u => u.equals(userId))) {
      this.assignees.push(userId);
    }
  }

  addComment(comment: Comment) {
    this.comments.push(comment);
  }

  complete() {
    if (this.isCompleted) throw new Error("Already completed");
    this.isCompleted = true;
    // Emit domain event TaskCompleted
  }

  isOverdue(currentDate: Date): boolean {
    return this.dueDate ? this.dueDate.isBefore(currentDate) : false;
  }

  getId(): TaskId {
    return this.id;
  }
}
```

Value Object Example
```
// src/domain/tasks/TaskTitle.ts
export class TaskTitle {
  constructor(private readonly value: string) {
    if (!value || value.length < 3) {
      throw new Error("Task title must be >= 3 characters");
    }
  }
  toString(): string {
    return this.value;
  }
}
```

3. Repositories
```
// src/domain/tasks/TaskRepository.ts
import { Task } from "./Task";
import { TaskId } from "./TaskId";

export interface TaskRepository {
  findById(id: TaskId): Promise<Task | null>;
  save(task: Task): Promise<void>;
}
```

In-memory implementation (Infrastructure Layer)

```
// src/infrastructure/repositories/InMemoryTaskRepository.ts
import { TaskRepository } from "../../domain/tasks/TaskRepository";
import { Task } from "../../domain/tasks/Task";
import { TaskId } from "../../domain/tasks/TaskId";

export class InMemoryTaskRepository implements TaskRepository {
  private tasks: Task[] = [];

  async findById(id: TaskId): Promise<Task | null> {
    return this.tasks.find(t => t.getId().equals(id)) ?? null;
  }

  async save(task: Task): Promise<void> {
    const index = this.tasks.findIndex(t => t.getId().equals(task.getId()));
    if (index >= 0) {
      this.tasks[index] = task;
    } else {
      this.tasks.push(task);
    }
  }
}
```


4. Application Services

```
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
```

5. Domain Events

```
// src/domain/shared/DomainEvent.ts
export interface DomainEvent {
  occurredOn: Date;
}

export class TaskCompleted implements DomainEvent {
  occurredOn: Date = new Date();
  constructor(public readonly taskId: number) {}
}
```
Key Changes vs Your Original Models
Entities contain behavior — no more just properties + constructor.
Value Objects enforce invariants (e.g., valid task titles, a valid due date).
Repositories abstract persistence — domain doesn’t care about DB details.
Application Services coordinate use cases; domain layer stays pure.
Domain Events handle tracking & auditing (Activity).