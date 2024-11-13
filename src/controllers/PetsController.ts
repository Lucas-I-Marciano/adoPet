import { Request, Response } from "express";
import type  {PetType}  from "../types/PetType.js";

let petList: Array<PetType> = [];

export class PetController {
  createPet(req: Request, res: Response) {
    const {id, age, name, adopted, specie} = <PetType>req.body;
    const pet = {id, age, name, adopted, specie}
    petList.push(pet);
    console.log(petList);
    res.status(200).json(pet);
  }
}
