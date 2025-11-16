// src/infrastructure/repositories/TypeOrmUserRepository.ts
import { UserRepository } from "../../domain/teams/UserRepository";
import { User } from "../../domain/teams/User";
import { AppDataSource } from "../db/dataSource";
import { UserEntity } from "../db/entities/UserEntity";
import { UserId } from "../../domain/teams/UserId";

export class TypeOrmUserRepository implements UserRepository {
  async findAll(): Promise<User[]> {
    const rows = await AppDataSource.getRepository(UserEntity).find();
    return rows.map(row => new User(new UserId(row.id), row.username, row.email, row.avatarUrl));
  }
}