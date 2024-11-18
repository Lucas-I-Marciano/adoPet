import { DataSource } from "typeorm";
import { PetEntity } from "../entities/PetEntity.js";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/config/database.sqlite",
  entities: [PetEntity],
  synchronize: true,
});
