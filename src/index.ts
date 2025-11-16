// src/index.ts
import express from "express";
import router from "./infrastructure/rest/routes";
import { initDb } from "./infrastructure/db/init";

const app = express();
app.use(express.json());
app.use(router);

initDb().then(() => {
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
});