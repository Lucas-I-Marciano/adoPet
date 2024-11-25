import { Request, Response } from "express";
import { AdopterEntity } from "../entities/AdopterEntity.js";
import { AdopterRepository } from "../repositories/AdopterRepository.js";

export class AdopterController {
  private adopterRepository = new AdopterRepository();

  async createAdopter(req: Request, res: Response) {
    const { address, cellphone, name, password, photo } = <AdopterEntity>(
      req.body
    );
    const newAdopter = new AdopterEntity(
      name,
      password,
      cellphone,
      photo!,
      address!
    );
    this.adopterRepository.createAdopter(newAdopter);
    return res.status(200).json({ message: "OK", newAdopter });
  }
}
