export class PetController {
    createPet(req, res) {
        const pet = req.body;
        res.status(200).json(pet);
    }
}
