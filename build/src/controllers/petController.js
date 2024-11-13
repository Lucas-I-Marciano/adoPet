let petList = [];
export class PetController {
    createPet(req, res) {
        const pet = req.body;
        petList.push(pet);
        console.log(petList);
        res.status(200).json(pet);
    }
}
