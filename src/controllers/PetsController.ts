import { Request, Response } from "express";
import type  {PetType}  from "../types/PetType.js";

let petList: Array<PetType> = [];

export class PetController {
  createPet(req: Request, res: Response) {
    const {id, age, name, adopted, specie} = <PetType>req.body;
    const pet = {id, age, name, adopted, specie}
    petList.push(pet);
    res.status(200).json(pet);
  }

  listPet(req: Request, res: Response) {
    res.status(200).json(petList)
  }
}
