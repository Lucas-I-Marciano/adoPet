import { AppDataSource } from "../config/data-source.js";
import { AddressEntity } from "../entities/AddressEntity.js";
import { AdopterEntity } from "../entities/AdopterEntity.js";

const adopterRepository = AppDataSource.getRepository(AdopterEntity);

export class AdopterRepository {
  createAdopter(adopter: AdopterEntity) {
    adopterRepository.save(adopter);
  }
  findAdopterById(id: number) {
    return adopterRepository.findOneBy({
      id: id,
    });
  }
}
