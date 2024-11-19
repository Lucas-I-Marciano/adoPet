import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AdopterEntity {
  constructor(
    id: number,
    name: string,
    password: string,
    cellphone: string,
    photo: string,
    address: string
  ) {
    this.name = name;
    this.password = password;
    this.cellphone = cellphone;
    this.photo = photo;
    this.address = address;
  }
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name: string;
  @Column()
  password: string;
  @Column()
  cellphone: string;
  @Column()
  photo: string;
  @Column()
  address: string;
}
