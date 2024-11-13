import { Router } from "express";
import { petsRouter } from "./petsRoute.js";

const routes = (app: Router) => {
  app.use("/pets", petsRouter);
};

export default routes;
