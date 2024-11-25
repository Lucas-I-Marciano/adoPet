import { Router } from "express";
import { AdopterController } from "../controllers/AdopterController.js";
export const adopterRouter = Router();
const adopterController = new AdopterController();
adopterRouter
    .post("/", (req, res) => {
    adopterController.createAdopter(req, res);
})
    .patch("/address/:adopterId", (req, res) => {
    adopterController.updateAddress(req, res);
})
    .get("/", (req, res) => {
    adopterController.listAdopters(req, res);
})
    .delete("/:adopterId", (req, res) => {
    adopterController.deleteAdopter(req, res);
});
