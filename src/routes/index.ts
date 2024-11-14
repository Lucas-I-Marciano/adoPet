import { Router } from "express";
import { petsRouter } from "./petsRoute.js";
import express from 'express';

const routes = (app: express.Application) => {
  app.use("/pets", petsRouter);
};

export default routes;
