// src/index.ts
import express from "express";
import cors from 'cors'
import "./infrastructure/di/container"; 
import router from "./infrastructure/rest/routes/routes";
import { initDb } from "./infrastructure/db/init";
import { setupSwagger } from "./infrastructure/rest/swaggers/swagger"
import "reflect-metadata";

const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // фронт
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
}));

app.use(express.json());
app.use(router);

setupSwagger(app);

initDb().then(() => {
  app.listen(3000, () => {
        console.log("Server running on http://localhost:3000");
        console.log("Swagger docs: http://localhost:3000/api-docs");
  });
});