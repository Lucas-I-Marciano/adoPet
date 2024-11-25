import { Router } from "express";
import { AdopterController } from "../controllers/AdopterController.js";
export const adopterRouter = Router();
const adopterController = new AdopterController();
adopterRouter.post("/", (req, res) => {
    adopterController.createAdopter(req, res);
});
