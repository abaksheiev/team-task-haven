// src/domain/tasks/Task.ts
import { TaskId } from "./TaskId";
import { TaskTitle } from "./TaskTitle";
import { UserId } from "../teams/UserId";
import { Comment } from "./Comment";
//import { Attachment } from "./Attachment";
//import { DueDate } from "./DueDate";

export class Task {
  constructor(
    private id: TaskId,
    private title: TaskTitle,
    private description?: string,
    private assignees: UserId[] = [],
    //private dueDate?: DueDate,
    private isCompleted: boolean = false,
    private comments: Comment[] = [],
    //private attachments: Attachment[] = []
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
/*
  isOverdue(currentDate: Date): boolean {
    return this.dueDate ? this.dueDate.isBefore(currentDate) : false;
  }
*/
  getId(): TaskId {
    return this.id;
  }
}