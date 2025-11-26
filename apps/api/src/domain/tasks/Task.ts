// src/domain/tasks/Task.ts
import { TaskId } from "./TaskId";
import { TaskTitle } from "./TaskTitle";
import { UserId } from "../teams/UserId";
import { Comment } from "./Comment";
import { TaskStatus } from "./TaskStatus";
//import { Attachment } from "./Attachment";
//import { DueDate } from "./DueDate";

export class Task {
  constructor(
    private id: TaskId,
    private title: TaskTitle,
    private description: string,
     private _status: TaskStatus,
    private assignee: UserId ,
    //private dueDate?: DueDate,
    private isCompleted: boolean = false,
    private comments: Comment[] = [],
    //private attachments: Attachment[] = []
  ) {}

    get status(): TaskStatus {
    return this._status;
   }

  addComment(comment: Comment) {
    this.comments.push(comment);
  }

  complete() {
    if (this.isCompleted) throw new Error("Already completed");
    this.isCompleted = true;
    // Emit domain event TaskCompleted
  }

  getId(): TaskId {
    return this.id;
  }

  getTitle():string{
    return this.title.toString()
  }

  getDescription():string{
    return this.description
  }

 
  changeStatus(newStatus: TaskStatus): void {
    if (this._status.equals(newStatus)) return;

    // ✅ Правило переходов
    const allowedTransitions: Record<string, string[]> = {
      todo: ["in_progress", "cancelled"],
      in_progress: ["done", "cancelled"],
      done: [],
      cancelled: []
    };

    if (!allowedTransitions[this._status.value]?.includes(newStatus.value)) {
      throw new Error(
        `Cannot change status from "${this._status.value}" to "${newStatus.value}"`
      );
    }

    this._status = newStatus;
  }
}