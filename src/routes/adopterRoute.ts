import { Request, Response, Router } from "express";
import { AdopterController } from "../controllers/AdopterController.js";
import { AddressEntity } from "../entities/AddressEntity.js";
import { AdopterEntity } from "../entities/AdopterEntity.js";
import { AppDataSource } from "../config/data-source.js";

export const adopterRouter = Router();
const adopterController = new AdopterController();

adopterRouter
  .post("/", (req: Request, res: Response) => {
    adopterController.createAdopter(req, res);
  })
  .patch("/address/:adopterId", (req: Request, res: Response) => {
    adopterController.updateAddress(req, res);
    // const addres1 = new AddressEntity("Sao Jose dos Campos", "Sao Paulo");
    // const adopted1 = new AdopterEntity("Lucas", "asd", "123123");
    // adopted1.address = addres1;
    // AppDataSource.manager.save(adopted1);
  });
