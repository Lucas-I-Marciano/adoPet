let petsList = [];
export class PetController {
    createPet(req, res) {
        const { id, age, name, adopted, specie } = req.body;
        const pet = { id, age, name, adopted, specie };
        petsList.push(pet);
        res.status(200).json(pet);
    }
    listPet(req, res) {
        res.status(200).json(petsList);
    }
    deletePet(req, res) {
        const { id } = req.params;
        const pet = petsList.find((pet) => {
            return pet['id'] == parseInt(id);
        });
        const indexToFind = pet == undefined ? {} : pet;
        const index = petsList.indexOf(indexToFind);
        if (index == -1) {
            return res.send(404).json({ status: 404, message: "Pet not founded" });
        }
        petsList.splice(index, 1);
        res.status(200).json({ status: 200, message: "Pet Deleted!", petDeleted: pet });
    }
}
