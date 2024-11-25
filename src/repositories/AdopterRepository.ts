import { AppDataSource } from "../config/data-source.js";
import { AddressEntity } from "../entities/AddressEntity.js";
import { AdopterEntity } from "../entities/AdopterEntity.js";

const adopterRepository = AppDataSource.getRepository(AdopterEntity);

export class AdopterRepository {
  createAdopter(adopter: AdopterEntity): void {
    adopterRepository.save(adopter);
  }
  findAdopterById(id: number): Promise<AdopterEntity | null> {
    return adopterRepository.findOneBy({
      id: id,
    });
  }
  listAdopters(): Promise<AdopterEntity[]> {
    return adopterRepository.find();
  }
  deleteAdopter(adopter: AdopterEntity): void {
    adopterRepository.remove(adopter);
  }
}
