import "reflect-metadata";  // <- обязательно первой строкой

import { Router } from "express";
import { container } from "tsyringe";
import { UserController } from "../UserController";
import { TaskController } from "../TaskController";

const router = Router();

/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get("/api/users", (req, res) => {
  const userController = container.resolve(UserController);
  return userController.getAllUsers(req, res);
});

/**
 * @openapi
 * /api/tasks:
 *   get:
 *     summary: Get all tasks
 *     responses:
 *       200:
 *         description: A list of taks
 */
router.get("/api/tasks", (req, res) => {
  const userController = container.resolve(TaskController);
  return userController.getAllTasks(req, res);
});


/**
 * @openapi
 * api/tasks/{id}:
 *   patch:
 *     summary: Update task status
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *               position:
 *                 type: number
 *     responses:
 *       200:
 *         description: Updated task
 */
router.patch("/api/tasks/:id", (req, res) => {
  const userController = container.resolve(TaskController);
  return userController.updateTaskStatus(req, res);
});

router.put("/api/tasks/:id", (req, res) => {
  const userController = container.resolve(TaskController);
  return userController.updateTask(req, res);
});

 export {router} 