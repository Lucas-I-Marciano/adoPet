import { Router } from "express";
export const petsRouter = Router();
function createPet(id, name, specie, age, adopted) {
    return {
        id,
        name,
        specie,
        age,
        adopted,
    };
}
let id = 0;
function generateId() {
    id = id + 1;
    return id;
}
petsRouter.post("/", (req, res) => {
    const pet1 = createPet(generateId(), "Bolt", "cachorro", 3, false);
    const pet2 = createPet(generateId(), "Mel", "gato", 2, false);
    res.send([pet1, pet2]);
});
