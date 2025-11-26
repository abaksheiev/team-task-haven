export class TaskStatus {
  static allowed = [
    "todo",
    "in_progress",
    "in_review",
    "done",
    "cancelled",
  ] as const;

  constructor(public readonly value: (typeof TaskStatus.allowed)[number]) {
    if (!TaskStatus.allowed.includes(value)) {
      throw new Error(`Invalid TaskStatus: ${value}`);
    }
  }

  equals(other: TaskStatus): boolean {
    return this.value === other.value;
  }

  isFinal(): boolean {
    return this.value === "done" || this.value === "cancelled";
  }

  static canTransition(from: TaskStatus, to: TaskStatus): boolean {
    const allowedTransitions: Record<string, string[]> = {
      todo: ["in_progress", "cancelled"],
      in_progress: ["in_review", "done", "cancelled"],
      done: ["todo"],
      cancelled: [],
    };
    return allowedTransitions[from.value]?.includes(to.value) ?? false;
  }

  static isAllowed(
    value: string
  ): value is (typeof TaskStatus.allowed)[number] {
    return (this.allowed as readonly string[]).includes(value);
  }

  static fromString(value: string): TaskStatus {
    if (!TaskStatus.isAllowed(value)) {
      throw new Error(`Invalid TaskStatus: ${value}`);
    }
    return new TaskStatus(value as (typeof TaskStatus.allowed)[number]);
  }
}
