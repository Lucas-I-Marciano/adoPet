import { AppDataSource } from "../config/data-source.js";
import { PetEntity } from "../entities/PetEntity.js";
import { AdopterEntity } from "../entities/AdopterEntity.js";
export const petRepository = AppDataSource.getRepository(PetEntity);
const adopterRepository = AppDataSource.getRepository(AdopterEntity);
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
    async adoPet(petId, adopterId) {
        const pet = await petRepository.findOneBy({ id: petId });
        const adopter = await adopterRepository.findOneBy({ id: adopterId });
        if (!pet) {
            throw new Error("Pet not founded");
        }
        if (!adopter) {
            throw new Error("Adopter not founded");
        }
        pet.adopter = adopter;
        pet.adopted = true;
        await petRepository.save(pet);
    }
    async filterPet(field, value) {
        return await petRepository.find({ where: { [field]: value } });
    }
}
