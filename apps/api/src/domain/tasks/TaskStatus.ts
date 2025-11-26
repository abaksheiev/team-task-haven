export class TaskStatus {
  constructor(public readonly  value: string) {
    if (!value || value.length < 3) {
      throw new Error("Task title must be >= 3 characters");
    }
  }
  getValue(): string | null {
    return this.value;
  }

  equals(other: TaskStatus): boolean {
    return this.value === other.value;
  }
  toString(): string {
    return this.value;
  }
}
