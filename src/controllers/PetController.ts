import { Request, Response } from "express";

let petList: {
  id: Number;
  name: String;
  specie: String;
  age: Number;
  adopted: Boolean;
}[] = [];

export class PetController {
  createPet(req: Request, res: Response) {
    const pet = req.body;
    petList.push(pet);
    console.log(petList);
    res.status(200).json(pet);
  }
}
