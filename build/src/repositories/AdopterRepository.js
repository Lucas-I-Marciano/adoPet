import { AppDataSource } from "../config/data-source.js";
import { AdopterEntity } from "../entities/AdopterEntity.js";
const adopterRepository = AppDataSource.getRepository(AdopterEntity);
export class AdopterRepository {
    createAdopter(adopter) {
        adopterRepository.save(adopter);
    }
    findAdopterById(id) {
        return adopterRepository.findOneBy({
            id: id,
        });
    }
    listAdopters() {
        return adopterRepository.find();
    }
    deleteAdopter(adopter) {
        adopterRepository.remove(adopter);
    }
}
