import { DataSource } from "typeorm";
import { PetEntity } from "../entities/PetEntity.js";
import { AdopterEntity } from "../entities/AdopterEntity.js";
import { AddressEntity } from "../entities/AddressEntity.js";
export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/config/database.sqlite",
    entities: [PetEntity, AdopterEntity, AddressEntity],
    synchronize: true,
});
