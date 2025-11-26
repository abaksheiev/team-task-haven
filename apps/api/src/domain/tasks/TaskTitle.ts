export class TaskTitle {
  constructor(public readonly value: string) {
    const trimmed = value.trim();
    if (!trimmed) {
      throw new Error("TaskTitle cannot be empty");
    }
    if (trimmed.length > 255) {
      throw new Error("TaskTitle cannot exceed 255 characters");
    }
    this.value = trimmed;
  }

  equals(other: TaskTitle): boolean {
    return this.value === other.value;
  }
}