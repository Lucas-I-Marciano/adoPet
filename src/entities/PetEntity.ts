import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EnumSpecie } from "../enum/EnumSpecie.js";
import { AdopterEntity } from "./AdopterEntity.js";

@Entity()
export class PetEntity {
  constructor(
    name: string,
    specie: EnumSpecie,
    birthday: Date,
    adopted: boolean
  ) {
    this.name = name;
    this.specie = specie;
    this.birthday = birthday;
    this.adopted = adopted;
  }
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column()
  specie: EnumSpecie;

  @Column()
  birthday: Date;

  @Column()
  adopted: boolean;

  @ManyToOne(() => AdopterEntity, (adopter) => adopter.pets)
  adopter!: AdopterEntity;
}
