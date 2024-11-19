import { AppDataSource } from "../config/data-source.js";
import { AdopterEntity } from "../entities/AdopterEntity.js";

const adopterRepository = AppDataSource.getRepository(AdopterEntity);

export class AdopterRepository {
  createAdopter(adopter: AdopterEntity) {
    adopterRepository.save(adopter);
  }
}