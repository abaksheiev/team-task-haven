// src/infrastructure/db/init.ts
import { AppDataSource } from "./dataSource";

export async function initDb() {
  try {
    await AppDataSource.initialize();
    console.log("DB connection established");
  } catch (error) {
    console.error("Failed to connect to DB", error);
    process.exit(1);
  }
}