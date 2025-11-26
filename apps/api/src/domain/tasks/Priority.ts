export class Priority {
  constructor(public readonly value: number) {
    if (!Number.isInteger(value) || value < 1 || value > 5) {
      throw new Error(`Priority must be an integer between 1 and 5`);
    }
  }

  equals(other: Priority): boolean {
    return this.value === other.value;
  }

  isHigherThan(other: Priority): boolean {
    return this.value < other.value; // Например, 1 выше, чем 3
  }
}