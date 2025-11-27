import "reflect-metadata"; 
import { container } from "tsyringe";
import { IUserRepository } from "../../domain/teams/IUserRepository";
import { TypeOrmUserRepository } from "../repositories/TypeOrmUserRepository";
import { UserService } from "../../application/UserService";
import { IUserService } from "../../domain/IUserService";
import { TypeOrmTaskRepository } from "../repositories/TypeOrmTaskRepository";
import { ITaskService } from "../../domain/ITaskService";
import { TaskService } from "../../application/TaskService";
import { ITaskRepository } from "../../domain/tasks/ITaskRepository";
import { UserController } from "../rest/UserController";
import { TaskController } from "../rest/TaskController";
import { InMemoryTaskRepository } from "../repositories/InMemoryTaskRepository";


// production / default bindings:
export function setupDI() {
  container.register<IUserService>("IUserService", { useClass: UserService });
  container.register<IUserRepository>("IUserRepository", { useClass: TypeOrmUserRepository });
  container.register<ITaskRepository>("ITaskRepository", { useClass: TypeOrmTaskRepository });
  //container.register<ITaskRepository>("ITaskRepository", { useClass: InMemoryTaskRepository });
  container.register<ITaskService>("ITaskService", { useClass: TaskService });

  container.register(UserController, { useClass: UserController });
  container.register(TaskController, { useClass: TaskController });
}


// helper for tests to override dependencies:
export function overrideDI(token: string, useClass: any) {
  container.register(token, { useClass });
}

export function registerMockRepo() {
 container.register<ITaskRepository>("ITaskRepository", { useClass: InMemoryTaskRepository });
}