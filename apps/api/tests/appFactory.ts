import express from "express";
import { setupDI, overrideDI, registerMockRepo } from "../src/infrastructure/di/container";
import { InMemoryTaskRepository } from "../src/infrastructure/repositories/InMemoryTaskRepository";
import { router } from "../src/infrastructure/rest/routes/routes";

export function createApp() {
    setupDI();
    registerMockRepo();
    //overrideDI("ITaskRepository", new InMemoryTaskRepository());

    const app = express();
    app.use(express.json());

    app.use(router);

    return app;
}