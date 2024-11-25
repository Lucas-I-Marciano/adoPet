import { AdopterRepository } from "../repositories/AdopterRepository.js";
export class AdopterController {
    constructor() {
        this.adopterRepository = new AdopterRepository();
    }
    createAdopter(req, res) {
        const adopter = req.body;
        return res.status(200).json({ message: "OK", adopter });
    }
}
