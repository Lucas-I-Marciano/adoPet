import { AdopterRepository } from "../repositories/AdopterRepository.js";
export class AdopterController {
    constructor() {
        this.adopterRepository = new AdopterRepository();
    }
    createAdopter(adopter) {
        return this.adopterRepository.createAdopter(adopter);
    }
}
