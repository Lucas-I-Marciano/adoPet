let petList = [];
export class PetController {
    createPet(req, res) {
        const { id, age, name, adopted, specie } = req.body;
        const pet = { id, age, name, adopted, specie };
        petList.push(pet);
        res.status(200).json(pet);
    }
    listPet(req, res) {
        res.status(200).json(petList);
    }
}
