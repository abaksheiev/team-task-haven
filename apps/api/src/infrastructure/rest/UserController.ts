import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { UserMapper } from "../../application/mappers/UserMapper";
import { IUserService } from "../../domain/IUserService";

@injectable()
export class UserController {
  constructor(@inject("IUserService") private readonly userService: IUserService) {}

  async getAllUsers(req: Request, res: Response) {
    const users = await this.userService.getAllUsers();
    res.json(UserMapper.toDtoList(users));
  }
}