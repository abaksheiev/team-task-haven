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
    private description: string,
    private status: number,
    private assignee: UserId ,
    //private dueDate?: DueDate,
    private isCompleted: boolean = false,
    private comments: Comment[] = [],
    //private attachments: Attachment[] = []
  ) {}

  

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

  getTitle():string{
    return this.title.toString()
  }

  getDescription():string{
    return this.description
  }

  getStatus(): string {
    const statusNum = Number(this.status);

    switch (statusNum) {
      case 1:
        return "Todo";
      case 2:
        return "In Progress";
      case 3:
        return "In Review";
      case 4:
        return "Done";
      default:
        return "";
    }
  }

  getStatusValue():number{
    return this.status
  }
}