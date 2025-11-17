// src/infrastructure/rest/routes.ts
import express from "express";
import { getAllUsers } from "../UserController";

const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 */
router.get("/users", getAllUsers);

export default router;