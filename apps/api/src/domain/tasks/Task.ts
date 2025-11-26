// src/domain/tasks/Task.ts
import { TaskId } from "./TaskId";
import { TaskTitle } from "./TaskTitle";
import { UserId } from "../teams/UserId";
import { TaskStatus } from "./TaskStatus";
import { Priority } from "./Priority";

export class Task {
constructor(
    public readonly id: TaskId,
    public title: TaskTitle,
    public description: string,
    public status: TaskStatus,
    public readonly assigneeId?: UserId,
    public readonly priority?: Priority,
  ) {}

 changeStatus(newStatus: TaskStatus): void {
    if (this.status.equals(newStatus)) return;

    if (!TaskStatus.canTransition(this.status, newStatus)) {
      throw new Error(`Cannot change status from ${this.status.value} to ${newStatus.value}`);
    }

    this.status = newStatus;
  }
}