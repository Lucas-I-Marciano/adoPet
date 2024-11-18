import { EnumSpecie } from "../enum/EnumSpecie.js";
import { PetEntity } from "../entity/PetEntity.js";
import { AppDataSource } from "../config/data-source.js";
let petsList = [];
let id = 0;
function generateId() {
    id = id + 1;
    return id;
}
export class PetController {
    async createPet(req, res) {
        const newPet1 = new PetEntity(1, "Lucas", EnumSpecie.CAT, new Date('05 October 2024'), false);
        await AppDataSource.manager.save(newPet1);
        const { birthday, name, adopted, specie } = req.body;
        if (!Object.values(EnumSpecie).includes(specie)) {
            res.status(400).json({ status: 400, message: "Specie not allowed" });
            return;
        }
        const pet = { id: generateId(), birthday, name, adopted, specie };
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
        const newPet = new PetEntity(generateId(), name, specie, birthday, adopted);
        await AppDataSource.manager.save(newPet);
        res.status(200).json(pet);
    }
    listPet(req, res) {
        res.status(200).json(petsList);
    }
    getPetId(req, res) {
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
    updatePet(req, res) {
        const petId = parseInt(req.params["id"]);
        const { id, birthday, name, adopted, specie } = req.body;
        const newPet = { id: petId, birthday, name, adopted, specie };
        const oldPet = petsList.filter((pet) => {
            return pet["id"] == petId;
        });
        if (oldPet.length === 0) {
            return res.status(404).json({ status: 404, message: "Pet not founded" });
        }
        const nullValuesList = [];
        for (let attribute in oldPet[0]) {
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
            oldPet: oldPet[0],
            newPet: newPet,
        });
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
