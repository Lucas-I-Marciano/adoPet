import { Router } from "express";
import { petsRouter } from "./petsRoute.js";
import express from "express";
import { adopterRouter } from "./adopterRoute.js";

const routes = (app: express.Application) => {
  app.use("/pets", petsRouter);
  app.use("/adopter", adopterRouter);
};

export default routes;
