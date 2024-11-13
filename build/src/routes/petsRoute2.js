import { Router } from "express";
export const petsRouter2 = Router();
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
petsRouter2.post("/2", (req, res) => {
    const pet1 = createPet(generateId(), "Bolt2", "cachorro", 3, false);
    const pet2 = createPet(generateId(), "Mel2", "gato", 2, false);
    res.send([pet1, pet2]);
});
