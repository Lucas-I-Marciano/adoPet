import { Router } from "express";
import { PetController } from "../controllers/PetsController.js";
export const petsRouter = Router();
const petController = new PetController();
petsRouter
    .post("/", (req, res) => {
    petController.createPet(req, res);
})
    .get("/", (req, res) => {
    petController.listPet(req, res);
})
    .get("/:id", (req, res) => {
    petController.getPetId(req, res);
})
    .delete("/:id", (req, res) => {
    petController.deletePet(req, res);
})
    .put("/:id", (req, res) => {
    petController.updatePet(req, res);
});
