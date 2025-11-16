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