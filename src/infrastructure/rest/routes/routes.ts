import "reflect-metadata";  // <- обязательно первой строкой

import express from "express";
import { container } from "tsyringe";
import { UserController } from "../UserController";

const router = express.Router();
const userController = container.resolve(UserController);

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get("/users", (req, res) => userController.getAllUsers(req, res));

export default router;