var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EnumSpecie } from "../enum/EnumSpecie.js";
let PetEntity = class PetEntity {
    constructor(name, specie, birthday, adopted) {
        this.name = name;
        this.specie = specie;
        this.birthday = birthday;
        this.adopted = adopted;
    }
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PetEntity.prototype, "id", void 0);
__decorate([
    Column({
        length: 100,
    }),
    __metadata("design:type", String)
], PetEntity.prototype, "name", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], PetEntity.prototype, "specie", void 0);
__decorate([
    Column(),
    __metadata("design:type", Date)
], PetEntity.prototype, "birthday", void 0);
__decorate([
    Column(),
    __metadata("design:type", Boolean)
], PetEntity.prototype, "adopted", void 0);
PetEntity = __decorate([
    Entity(),
    __metadata("design:paramtypes", [String, String, Date, Boolean])
], PetEntity);
export { PetEntity };
