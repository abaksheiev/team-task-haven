// src/infrastructure/rest/UserController.ts
import { Request, Response } from "express";
import { UserService } from "../../application/UserService";
import { TypeOrmUserRepository } from "../repositories/TypeOrmUserRepository";

const userRepo = new TypeOrmUserRepository();
const userService = new UserService(userRepo);

export async function getAllUsers(req: Request, res: Response) {
  const users = await userService.getAllUsers();

  // Map domain entity to DTO:
  const dto = users.map(u => ({
    id: u.getId().toString(),
    username: u.getUsername(),
    email: u.getEmail()
  }));

  res.json(dto);
}