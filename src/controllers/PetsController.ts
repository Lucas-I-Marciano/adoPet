import { Request, Response } from "express";
import type { PetType } from "../types/PetType.js";
import { EnumSpecie } from "../enum/EnumSpecie.js";
import { PetEntity } from "../entity/PetEntity.js";
import { AppDataSource } from "../config/data-source.js";

let petsList: Array<PetType> = [];
let id: number = 0;

function generateId(): number {
  id = id + 1;
  return id;
}

export class PetController {
  async createPet(req: Request, res: Response) {
    
    
    const { birthday, name, adopted, specie } = <PetType>req.body;
    if (!Object.values(EnumSpecie).includes(specie)) {
      res.status(400).json({ status: 400, message: "Specie not allowed" });
      return;
    }
    const pet = { id: 1, birthday, name, adopted, specie };
    for (let attribute in pet) {
      if (!pet[attribute as keyof PetType]) {
        if (
          attribute == "adopted" &&
          pet[attribute as keyof PetType] == false
        ) {
          continue;
        }
        res.status(400).json({
          message: "There are missing values",
          requiredFields: "birthday, name, adopted, specie",
          example: {
            birthday: "2011-10-05T14:48:00.000Z",
            name: "Mel",
            adopted: "true or false",
            specie: EnumSpecie,
          },
        });
        return;
      }
    }
  
  const newPet = new PetEntity(name, specie, birthday, adopted)
  await AppDataSource.manager.save(newPet)
  res.status(200).json(newPet);
  }

  listPet(req: Request, res: Response) {
    res.status(200).json(petsList);
  }

  getPetId(req: Request, res: Response) {
    const petId = req.params["id"];
    const pet = petsList.find((pet) => {
      return pet["id"] == parseInt(petId);
    });
    if (!pet) {
      res.status(404).json({ status: 404, message: "Pet not founded" });
      return;
    }
    res.status(200).json({ status: 200, pet: pet });
    return pet;
  }

  updatePet(req: Request, res: Response) {
    const petId = parseInt(req.params["id"]);
    const { id, birthday, name, adopted, specie } = <PetType>req.body;

    const newPet: PetType = { id: petId, birthday, name, adopted, specie };

    const oldPet = petsList.filter((pet) => {
      return pet["id"] == petId;
    });
    if (oldPet.length === 0) {
      return res.status(404).json({ status: 404, message: "Pet not founded" });
    }
    const nullValuesList: Array<string> = [];
    for (let attribute in oldPet[0]) {
      if (!newPet[attribute as keyof PetType]) {
        if (
          attribute == "adopted" &&
          newPet[attribute as keyof PetType] == false
        ) {
          continue;
        }
        nullValuesList.push(attribute);
      }
    }
    if (nullValuesList.length > 0) {
      res.status(400).json({
        message: "There are missing values",
        missingValues: nullValuesList.join(";"),
      });
      return;
    }
    res.status(200).json({
      status: 200,
      message: "Pet updated!",
      oldPet: oldPet[0],
      newPet: newPet,
    });
  }

  deletePet(req: Request, res: Response) {
    const { id } = req.params;

    const pet = petsList.find((pet) => {
      return pet["id"] == parseInt(id);
    });
    const indexToFind = pet == undefined ? <PetType>{} : pet;
    const index = petsList.indexOf(indexToFind);
    if (index == -1) {
      return res.send(404).json({ status: 404, message: "Pet not founded" });
    }

    petsList.splice(index, 1);
    res
      .status(200)
      .json({ status: 200, message: "Pet Deleted!", petDeleted: pet });
  }
}
