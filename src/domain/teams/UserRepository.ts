// src/domain/teams/UserRepository.ts
import { User } from "./User";

export interface UserRepository {
  findAll(): Promise<User[]>;
}