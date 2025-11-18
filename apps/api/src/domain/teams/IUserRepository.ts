// src/domain/teams/UserRepository.ts
import { User } from "./User";

export interface IUserRepository {
  findAll(): Promise<User[]>;
}