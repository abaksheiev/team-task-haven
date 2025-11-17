import { injectable, inject } from "tsyringe";
import { IUserRepository } from "../domain/teams/IUserRepository";
import { User } from "../domain/teams/User";
import { IUserService } from "../domain/IUserService";

@injectable()
export class UserService implements IUserService {
  constructor(
     @inject("IUserRepository") private readonly userRepo: IUserRepository) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userRepo.findAll();
  }
}