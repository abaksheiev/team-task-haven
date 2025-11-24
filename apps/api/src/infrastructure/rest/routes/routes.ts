import "reflect-metadata";  // <- обязательно первой строкой

import express from "express";
import { container } from "tsyringe";
import { UserController } from "../UserController";
import { TaskController } from "../TaskController";

const router = express.Router();
const userController = container.resolve(UserController);
const taskController = container.resolve(TaskController);

/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get("/api/users", (req, res) => userController.getAllUsers(req, res));

/**
 * @openapi
 * /api/tasks:
 *   get:
 *     summary: Get all tasks
 *     responses:
 *       200:
 *         description: A list of taks
 */
router.get("/api/tasks", (req, res) => taskController.getAllTasks(req, res));

export default router;