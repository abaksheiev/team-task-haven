// src/application/UserService.ts
import { IUserRepository } from "../domain/teams/IUserRepository";
import { User } from "../domain/teams/User";

export class UserService {
  constructor(private readonly userRepo: IUserRepository) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userRepo.findAll();
  }
}