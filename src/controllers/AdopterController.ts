import { Request, Response } from "express";
import { AdopterEntity } from "../entities/AdopterEntity.js";
import { AdopterRepository } from "../repositories/AdopterRepository.js";

export class AdopterController {
  private adopterRepository = new AdopterRepository();

  createAdopter(req: Request, res: Response) {
    const adopter = req.body;
    return res.status(200).json({ message: "OK", adopter });
  }
}
