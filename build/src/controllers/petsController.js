import { EnumSpecie } from "../enum/EnumSpecie.js";
import { PetEntity } from "../entity/PetEntity.js";
import { petRepository } from "../repositories/PetRepository.js";
let petsList = [];
let id = 0;
function generateId() {
    id = id + 1;
    return id;
}
export class PetController {
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
        await petRepository.save(newPet);
        res.status(200).json(newPet);
    }
    async listPet(req, res) {
        const savedPets = await petRepository.find();
        res.status(200).json({ status: 200, message: "Success!", pets: savedPets });
    }
    async getPetId(req, res) {
        try {
            const petId = parseInt(req.params["id"]);
            const pet = await petRepository.findOneBy({
                id: petId
            });
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
            const newPet = { id: petId, birthday, name, adopted, specie };
            const oldPet = await petRepository.findOneBy({
                id: petId
            });
            if (!oldPet) {
                return res.status(404).json({ status: 404, message: "Pet not founded" });
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
    deletePet(req, res) {
        const { id } = req.params;
        const pet = petsList.find((pet) => {
            return pet["id"] == parseInt(id);
        });
        const indexToFind = pet == undefined ? {} : pet;
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
