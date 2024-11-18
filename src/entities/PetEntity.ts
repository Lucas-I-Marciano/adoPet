import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EnumSpecie } from "../enum/EnumSpecie.js";

@Entity()
export class PetEntity {
  constructor(name : string, specie : EnumSpecie, birthday : Date, adopted : boolean) {
    this.name = name
    this.specie = specie
    this.birthday = birthday
    this.adopted = adopted
  }
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 100,
  })
  name: string

  @Column()
  specie: EnumSpecie

  @Column()
  birthday: Date

  @Column()
  adopted: boolean
}



