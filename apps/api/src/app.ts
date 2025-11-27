// src/app.ts
import "reflect-metadata"; // ✅ первым делом!
import express from "express";
import cors from 'cors';
import { setupDI } from "./infrastructure/di/container"; 
import { setupSwagger } from "./infrastructure/rest/swaggers/swagger";
const { router } = require( "./infrastructure/rest/routes/routes");

setupDI();

const app = express();

// CORS — лучше явно указать URL фронта в env
app.use(cors({
  origin: process.env.CLIENT_URL ?? 'http://localhost:5173',
  methods: ['GET','POST','PATCH','PUT','DELETE'],
  credentials: true
}));

app.use(express.json());

setupSwagger(app);

app.use(router);

export { app };