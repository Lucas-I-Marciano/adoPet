import { AppDataSource } from "../config/data-source.js";
import { PetEntity } from "../entities/PetEntity.js";
export const petRepository = AppDataSource.getRepository(PetEntity);
export class PetRepository {
    async createPet(pet) {
        return await petRepository.save(pet);
    }
    async listAllPets() {
        return await petRepository.find();
    }
    async listPetById(id) {
        return await petRepository.findOneBy({
            id: id,
        });
    }
    async updatePetById(id, pet) {
        let oldPet = await petRepository.findOneBy({
            id: id,
        });
        oldPet = pet;
        return await petRepository.save(oldPet);
    }
    async deletePetById(id) {
        const pet = await petRepository.findOneBy({ id });
        const treatedPet = pet ? pet : {};
        await petRepository.remove(treatedPet);
    }
}
