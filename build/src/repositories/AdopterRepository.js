import { AppDataSource } from "../config/data-source.js";
import { AdopterEntity } from "../entities/AdopterEntity.js";
const adopterRepository = AppDataSource.getRepository(AdopterEntity);
export class AdopterRepository {
    async createAdopter(adopter) {
        adopterRepository.save(adopter);
    }
}
