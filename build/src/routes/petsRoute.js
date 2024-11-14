import { Router } from "express";
import { PetController } from "../controllers/PetsController.js";
export const petsRouter = Router();
const petController = new PetController();
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
petsRouter
    .post("/", (req, res) => {
    petController.createPet(req, res);
})
    .get('/', (req, res) => {
    petController.listPet(req, res);
})
    .delete('/:id', (req, res) => {
    petController.deletePet(req, res);
})
    .put('/:id', (req, res) => {
    petController.updatePet(req, res);
});
