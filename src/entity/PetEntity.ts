import { Column, Entity, PrimaryColumn } from "typeorm";
import { EnumSpecie } from "../enum/EnumSpecie.js";

@Entity()
export class PetEntity {
  constructor(id : number, name : string, specie : EnumSpecie, birthday : Date, adopted : boolean) {
    this.id = id
    this.name = name
    this.specie = specie
    this.birthday = birthday
    this.adopted = adopted
  }
  @PrimaryColumn()
  id : number

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



