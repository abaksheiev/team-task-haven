// src/infrastructure/rest/UserController.ts
import { Request, Response } from "express";
import { UserService } from "../../application/UserService";
import { TypeOrmUserRepository } from "../repositories/TypeOrmUserRepository";
import { UserMapper } from "../../application/mappers/UserMapper";

const userRepo = new TypeOrmUserRepository();
const userService = new UserService(userRepo);

export async function getAllUsers(req: Request, res: Response) {
    const users = await userService.getAllUsers();
    res.json(UserMapper.toDtoList(users));
}