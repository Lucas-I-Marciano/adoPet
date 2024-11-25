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
let AdopterEntity = class AdopterEntity {
    constructor(id, name, password, cellphone, photo, address) {
        this.name = name;
        this.password = password;
        this.cellphone = cellphone;
        this.photo = photo;
        this.address = address;
    }
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], AdopterEntity.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], AdopterEntity.prototype, "name", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], AdopterEntity.prototype, "password", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], AdopterEntity.prototype, "cellphone", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], AdopterEntity.prototype, "photo", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], AdopterEntity.prototype, "address", void 0);
AdopterEntity = __decorate([
    Entity(),
    __metadata("design:paramtypes", [Number, String, String, String, String, String])
], AdopterEntity);
export { AdopterEntity };
