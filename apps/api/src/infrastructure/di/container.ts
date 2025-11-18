import "reflect-metadata"; 
import { container } from "tsyringe";
import { IUserRepository } from "../../domain/teams/IUserRepository";
import { TypeOrmUserRepository } from "../repositories/TypeOrmUserRepository";
import { UserService } from "../../application/UserService";
import { IUserService } from "../../domain/IUserService";

container.register<IUserRepository>("IUserRepository", { useClass: TypeOrmUserRepository });
container.register<IUserService>("IUserService", { useClass: UserService });