// src/domain/shared/DomainEvent.ts
export interface DomainEvent {
  occurredOn: Date;
}

export class TaskCompleted implements DomainEvent {
  occurredOn: Date = new Date();
  
  constructor(public readonly taskId: number) {}
}