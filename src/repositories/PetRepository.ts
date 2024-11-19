import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source.js";
import { PetEntity } from "../entities/PetEntity.js";

export const petRepository = AppDataSource.getRepository(PetEntity);

export class PetRepository {
  async createPet(pet: PetEntity): Promise<PetEntity> {
    return await petRepository.save(pet);
  }
  async listAllPets(): Promise<PetEntity[]> {
    return await petRepository.find();
  }

  async listPetById(id: number): Promise<PetEntity | null> {
    return await petRepository.findOneBy({
      id: id,
    });
  }

  async updatePetById(id: number, pet: PetEntity): Promise<PetEntity> {
    let oldPet = await petRepository.findOneBy({
      id: id,
    });
    oldPet = pet;
    return await petRepository.save(oldPet);
  }

  async deletePetById(id: number): Promise<void> {
    const pet = await petRepository.findOneBy({ id });
    const treatedPet = pet ? pet : <PetEntity>{};
    await petRepository.remove(treatedPet);
  }
}
