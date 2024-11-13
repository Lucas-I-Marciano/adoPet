let petList = [];
export class PetController {
    createPet(req, res) {
        const { id, age, name, adopted, specie } = req.body;
        const pet = { id, age, name, adopted, specie };
        petList.push(pet);
        console.log(petList);
        res.status(200).json(pet);
    }
}
