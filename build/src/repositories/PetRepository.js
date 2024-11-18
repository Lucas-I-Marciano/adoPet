import { AppDataSource } from "../config/data-source.js";
import { PetEntity } from "../entities/PetEntity.js";
export const petRepository = AppDataSource.getRepository(PetEntity);
