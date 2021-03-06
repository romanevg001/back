"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const psrobject_entity_1 = require("../psrobject/psrobject.entity");
let TypeEntity = class TypeEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], TypeEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], TypeEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(type => psrobject_entity_1.PsrobjectEntity, psrObjects => psrObjects.type),
    __metadata("design:type", Array)
], TypeEntity.prototype, "psrObjects", void 0);
TypeEntity = __decorate([
    typeorm_1.Entity('type')
], TypeEntity);
exports.TypeEntity = TypeEntity;
//# sourceMappingURL=type.entity.js.map