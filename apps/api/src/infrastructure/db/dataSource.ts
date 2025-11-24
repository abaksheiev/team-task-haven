// src/infrastructure/db/dataSource.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserEntity } from "./entities/UserEntity";
//import { TeamEntity } from "./entities/TeamEntity";
import { TaskEntity } from "./entities/TaskEntity";
//import { BoardEntity } from "./entities/BoardEntity";
//import { ListEntity } from "./entities/ListEntity";
//import { AttachmentEntity } from "./entities/AttachmentEntity";
//import { CommentEntity } from "./entities/CommentEntity";
//import { ActivityEntity } from "./entities/ActivityEntity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST ?? "localhost",
  port: Number(process.env.DB_PORT ?? 5432),
  username: process.env.DB_USER ?? "postgres",
  password: process.env.DB_PASS ?? "postgres",
  database: process.env.DB_NAME ?? "team-task-haven",
  synchronize: true, // auto-create tables in dev; disable in prod
  logging: false,
  entities: [
    UserEntity,
  //  TeamEntity,
     TaskEntity,
  //  BoardEntity,
  //  ListEntity,
  //  AttachmentEntity,
  //  CommentEntity,
  //  ActivityEntity,
  ],
  migrations: ["src/infrastructure/db/migrations/*.ts"],
});