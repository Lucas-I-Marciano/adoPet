import { AppDataSource } from "../config/data-source.js";
import { PetEntity } from "../entity/PetEntity.js";
export const petRepository = AppDataSource.getRepository(PetEntity);
