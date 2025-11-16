// src/infrastructure/rest/routes.ts
import express from "express";
import { getAllUsers } from "./UserController";

const router = express.Router();

router.get("/users", getAllUsers);

export default router;