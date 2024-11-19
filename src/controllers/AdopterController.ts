import { AdopterEntity } from "../entities/AdopterEntity.js";
import { AdopterRepository } from "../repositories/AdopterRepository.js";

export class AdopterController {
  private adopterRepository = new AdopterRepository();

  createAdopter(adopter: AdopterEntity) {
    return this.adopterRepository.createAdopter(adopter);
  }
}
