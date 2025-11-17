// src/index.ts
import express from "express";
import router from "./infrastructure/rest/routes/routes";
import { initDb } from "./infrastructure/db/init";
import { swaggerOptions } from "./infrastructure/rest/swaggers/swagger";

const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use(router);

initDb().then(() => {
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
});