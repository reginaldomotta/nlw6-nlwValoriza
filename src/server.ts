import express from "express";

import "reflect-metadata";

import './database';

import { error } from "./middlewares/error";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

//middleware para tratamento de erros
app.use(error);

app.listen(3333, () => {
  console.log("Server is running!");
});