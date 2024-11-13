import { Router } from "express";
import { petsRouter } from "./petsRoute.js";
const router = Router();
router.use("/pets", petsRouter);
export default router;
