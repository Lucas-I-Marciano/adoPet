import { Request, Response, Router } from "express";
import { AdopterController } from "../controllers/AdopterController.js";

export const adopterRouter = Router();
const adopterController = new AdopterController();

adopterRouter.post("/", (req: Request, res: Response) => {
  adopterController.createAdopter(req, res);
});
