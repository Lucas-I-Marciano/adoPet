import { Request, Response, Router } from "express";
import { PetController } from "../controllers/PetsController.js";

export const petsRouter = Router();
const petController = new PetController();

petsRouter
  .post("/", (req: Request, res: Response) => {
    petController.createPet(req, res);
  })
  .get("/", (req: Request, res: Response) => {
    petController.listPet(req, res);
  })
  .get("/:id", (req: Request, res: Response) => {
    petController.getPetId(req, res);
  })
  .delete("/:id", (req: Request, res: Response) => {
    petController.deletePet(req, res);
  })
  .put("/:id", (req: Request, res: Response) => {
    petController.updatePet(req, res);
  });
