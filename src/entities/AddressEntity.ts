import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AddressEntity {
  constructor(city: string, state: string) {
    this.city = city;
    this.state = state;
  }
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  city: string;
  @Column()
  state: string;
}
