import { Column, Entity, PrimaryColumn } from "typeorm";
import { EnumSpecie } from "../enum/enumSpecie";

@Entity()
export class PetEntity {
  constructor(
    id: number,
    name: string,
    specie: EnumSpecie,
    birthday: Date,
    adopted: Boolean
  ) {
    (this.id = id), (this.name = name);
    this.specie = specie;
    this.birthday = birthday;
    this.adopted = adopted;
  }
  @PrimaryColumn()
  id;

  @Column({
    length: 100,
  })
  name;

  @Column()
  specie;

  @Column()
  birthday;

  @Column()
  adopted;
}
