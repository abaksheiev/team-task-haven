// src/application/UserService.ts
import { UserRepository } from "../domain/teams/UserRepository";
import { User } from "../domain/teams/User";

export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userRepo.findAll();
  }
}