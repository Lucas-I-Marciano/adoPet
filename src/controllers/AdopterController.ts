import { Request, Response } from "express";
import { AdopterEntity } from "../entities/AdopterEntity.js";
import { AdopterRepository } from "../repositories/AdopterRepository.js";
import { AddressEntity } from "../entities/AddressEntity.js";

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
      photo,
      address
    );
    this.adopterRepository.createAdopter(newAdopter);
    return res.status(200).json({ message: "OK", newAdopter });
  }

  async updateAddress(req: Request, res: Response) {
    const { city, state } = <AddressEntity>req.body;
    const { adopterId } = req.params;
    const newAddress = new AddressEntity(city, state);
    const adopter = await this.adopterRepository.findAdopterById(
      parseInt(adopterId)
    );
    if (!adopter) {
      return res
        .status(404)
        .json({ status: 404, message: "Adopter not found!" });
    }
    adopter.address = newAddress;
    this.adopterRepository.createAdopter(adopter);
    return res.status(200).json({
      status: 200,
      message: `Adopter's address Updated: ${newAddress.city} - ${newAddress.state}`,
    });
  }

  async listAdopters(req: Request, res: Response) {
    return res.status(200).json({
      message: "Successful!",
      data: await this.adopterRepository.listAdopters(),
    });
  }

  async deleteAdopter(req: Request, res: Response) {
    const { adopterId } = req.params;
    const adopter = await this.adopterRepository.findAdopterById(
      parseInt(adopterId)
    );
    if (!adopter) {
      return res
        .status(404)
        .json({ status: 404, message: "Adopter not found!" });
    }
    this.adopterRepository.deleteAdopter(adopter);
    return res.status(200).json({
      status: 200,
      message: "Adopter successfully deleted!",
      data: adopter,
    });
  }
}
