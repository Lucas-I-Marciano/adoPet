import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AddressEntity } from "./AddressEntity.js";

@Entity()
export class AdopterEntity {
  constructor(
    name: string,
    password: string,
    cellphone: string,
    photo?: string,
    address?: AddressEntity
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
  @Column({ nullable: true })
  photo?: string;
  @OneToOne((type) => AddressEntity, (address) => address.id, {
    nullable: true,
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  address?: AddressEntity;
}
