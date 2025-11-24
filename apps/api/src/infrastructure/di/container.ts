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

container.register<IUserRepository>("IUserRepository", { useClass: TypeOrmUserRepository });
container.register<IUserService>("IUserService", { useClass: UserService });

container.register<ITaskRepository>("ITaskRepository", { useClass: TypeOrmTaskRepository });
container.register<ITaskService>("ITaskService", { useClass: TaskService });