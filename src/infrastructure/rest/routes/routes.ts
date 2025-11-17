// src/infrastructure/rest/routes.ts
import express from "express";
import { getAllUsers } from "../UserController";

const router = express.Router();

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get("/users", getAllUsers);

export default router;