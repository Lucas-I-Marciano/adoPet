let petsList = [];
let id = 0;
function generateId() {
    id = id + 1;
    return id;
}
export class PetController {
    createPet(req, res) {
        const { age, name, adopted, specie } = req.body;
        const pet = { id: generateId(), age, name, adopted, specie };
        petsList.push(pet);
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
        const { id, age, name, adopted, specie } = req.body;
        const newPet = { id: petId, age, name, adopted, specie };
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
