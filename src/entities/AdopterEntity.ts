import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AddressEntity } from "./AddressEntity.js";
import { PetEntity } from "./PetEntity.js";

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
  @OneToOne(() => AddressEntity, (address) => address.id, {
    nullable: true,
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  address?: AddressEntity;

  @OneToMany(() => PetEntity, (pet) => pet.adopter, { eager: true })
  pets!: PetEntity[];
}
