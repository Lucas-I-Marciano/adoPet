import { Request, Response } from "express";
import type { PetType } from "../types/PetType.js";
import { EnumSpecie } from "../enum/EnumSpecie.js";
import { PetEntity } from "../entities/PetEntity.js";
import { petRepository } from "../repositories/PetRepository.js";

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
  await petRepository.save(newPet)
  res.status(200).json(newPet);
  }

  async listPet(req: Request, res: Response) {
    const savedPets = await petRepository.find()
    res.status(200).json({status : 200, message : "Success!", pets : savedPets});
  }

  async getPetId(req: Request, res: Response) {
    try {
      const petId = parseInt(req.params["id"]);
      const pet = await petRepository.findOneBy({
        id : petId
      })
      if (!pet) {
        res.status(404).json({ status: 404, message: "Pet not founded" });
        return;
      }
      res.status(200).json({ status: 200, pet: pet });
      return pet;
    } catch(error) {
      res.status(406).json({ status: 406, message: "ID must be a integer"})
      return
    }
  }

  async updatePet(req: Request, res: Response) {
    try {
      const petId = parseInt(req.params["id"]);
      const { id = petId, birthday, name, adopted, specie } = <PetType>req.body;
      const newPet: PetType = { id: petId, birthday, name, adopted, specie };
      let oldPet = await petRepository.findOneBy({
        id : petId
      })
      const toShowOldPet = oldPet

      if (!oldPet) {
        return res.status(404).json({ status: 404, message: "Pet not founded" });
      }

      const nullValuesList: Array<string> = [];
      for (let attribute in oldPet) {
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

      oldPet = newPet
      await petRepository.save(oldPet)
      res.status(200).json({
        status: 200,
        message: "Pet updated!",
        oldPet: toShowOldPet,
        newPet: newPet,
      });
    } catch (error) {
      res.status(406).json({ status: 406, message: "ID must be a integer"})
      return
    }


  }

  async deletePet(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"]);
      const pet = await petRepository.findOneBy({id})
      const treatedPet = pet ? pet : <PetType>{}

      await petRepository.remove(treatedPet)

      res
        .status(200)
        .json({ status: 200, message: "Pet Deleted!", petDeleted: pet });
    } catch (error) {
      res.status(406).json({ status: 406, message: "ID must be a integer"})
      return
    }

  }
}
