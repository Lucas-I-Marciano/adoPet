import { EnumSpecie } from "../enum/EnumSpecie.js";
import { PetEntity } from "../entities/PetEntity.js";
import { PetRepository } from "../repositories/PetRepository.js";
export class PetController {
    constructor() {
        this.petRepRepository = new PetRepository();
    }
    async createPet(req, res) {
        const { birthday, name, adopted, specie } = req.body;
        if (!Object.values(EnumSpecie).includes(specie)) {
            res.status(400).json({ status: 400, message: "Specie not allowed" });
            return;
        }
        const pet = { id: 1, birthday, name, adopted, specie };
        for (let attribute in pet) {
            if (!pet[attribute]) {
                if (attribute == "adopted" &&
                    pet[attribute] == false) {
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
        const newPet = new PetEntity(name, specie, birthday, adopted);
        const createPet = await this.petRepRepository.createPet(newPet);
        res.status(200).json(Object.assign(Object.assign({}, newPet), { id: createPet.id }));
    }
    async listPet(req, res) {
        const savedPets = await this.petRepRepository.listAllPets();
        res.status(200).json({ status: 200, message: "Success!", pets: savedPets });
    }
    async getPetId(req, res) {
        try {
            const petId = parseInt(req.params["id"]);
            const pet = await this.petRepRepository.listPetById(petId);
            if (!pet) {
                res.status(404).json({ status: 404, message: "Pet not founded" });
                return;
            }
            res.status(200).json({ status: 200, pet: pet });
            return pet;
        }
        catch (error) {
            res.status(406).json({ status: 406, message: "ID must be a integer" });
            return;
        }
    }
    async updatePet(req, res) {
        try {
            const petId = parseInt(req.params["id"]);
            const { id = petId, birthday, name, adopted, specie } = req.body;
            const newPet = new PetEntity(name, specie, birthday, adopted);
            const oldPet = await this.petRepRepository.listPetById(petId);
            if (!oldPet) {
                return res
                    .status(404)
                    .json({ status: 404, message: "Pet not founded" });
            }
            const nullValuesList = [];
            for (let attribute in oldPet) {
                if (!newPet[attribute]) {
                    if (attribute == "adopted" &&
                        newPet[attribute] == false) {
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
            await this.petRepRepository.updatePetById(petId, newPet);
            // await this.petRepRepository.createPet(oldPet);
            res.status(200).json({
                status: 200,
                message: "Pet updated!",
                oldPet: oldPet,
                newPet: newPet,
            });
        }
        catch (error) {
            res.status(406).json({ status: 406, message: "ID must be a integer" });
            return;
        }
    }
    async deletePet(req, res) {
        try {
            const id = parseInt(req.params["id"]);
            this.petRepRepository.deletePetById(id);
            res.status(200).json({ status: 200, message: "Pet Deleted!" });
        }
        catch (error) {
            res.status(406).json({ status: 406, message: "ID must be a integer" });
            return;
        }
    }
    async adoPet(req, res) {
        const { petId, adopterId } = req.params;
        this.petRepRepository.adoPet(parseInt(petId), parseInt(adopterId));
        return res.status(200).json({ status: 200, message: "Pet adopted!" });
    }
    async filterPet(req, res) {
        const { field, value } = req.query;
        const pets = await this.petRepRepository.filterPet(field, value);
        return res.status(200).json({ status: 200, data: pets });
    }
}
