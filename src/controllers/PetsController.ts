import { Request, Response } from "express";
import type  {PetType}  from "../types/PetType.js";

let petsList: Array<PetType> = [];

export class PetController {
  createPet(req: Request, res: Response) {
    const {id, age, name, adopted, specie} = <PetType>req.body;
    const pet = {id, age, name, adopted, specie}
    petsList.push(pet);
    res.status(200).json(pet);
  }

  listPet(req: Request, res: Response) {
    res.status(200).json(petsList)
  }

  updatePet(req: Request, res: Response) {
    const petId = req.params['id']
    const {adopted, age, id, name, specie} = <PetType>req.body

    const pet = petsList.find((pet)=>{
      return pet['id'] == parseInt(petId)
    })
    const indexToFind = pet == undefined? <PetType>{} : pet
    const index = petsList.indexOf(indexToFind)
    if (index == -1) {
      return res.status(404).json({status : 404, message : "Pet not founded"})
    }
    petsList[index] = {adopted, age, id, name, specie}
    res.status(200).json({status:200, message: "Pet updated!", oldPet : pet, newPet : petsList[index]})
  }

  deletePet(req: Request, res: Response) {
    const {id} = req.params

    const pet = petsList.find((pet)=>{
      return pet['id'] == parseInt(id)
    })
    const indexToFind = pet == undefined? <PetType>{} : pet
    const index = petsList.indexOf(indexToFind)
    if (index == -1) {
      return res.send(404).json({status : 404, message : "Pet not founded"})
    }

    petsList.splice(index, 1)
    res.status(200).json({status : 200, message: "Pet Deleted!", petDeleted : pet})
  }
}
