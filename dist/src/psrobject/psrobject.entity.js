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
const department_entity_1 = require("../dictionaries/departments/department.entity");
const region_entity_1 = require("../dictionaries/regions/region.entity");
const tag_entity_1 = require("../tag/tag.entity");
const type_entity_1 = require("../type/type.entity");
const box_entity_1 = require("../box/box.entity");
let PsrobjectEntity = class PsrobjectEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], PsrobjectEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], PsrobjectEntity.prototype, "created", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], PsrobjectEntity.prototype, "updated", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PsrobjectEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PsrobjectEntity.prototype, "image", void 0);
__decorate([
    typeorm_1.ManyToOne(type => type_entity_1.TypeEntity, type => type.psrObjects),
    __metadata("design:type", type_entity_1.TypeEntity)
], PsrobjectEntity.prototype, "type", void 0);
__decorate([
    typeorm_1.ManyToOne(type => region_entity_1.RegionEntity, region => region.psrObjects),
    __metadata("design:type", region_entity_1.RegionEntity)
], PsrobjectEntity.prototype, "region", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PsrobjectEntity.prototype, "choiceJustification", void 0);
__decorate([
    typeorm_1.ManyToMany(type => tag_entity_1.TagEntity, tag => tag.psrObjects),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], PsrobjectEntity.prototype, "tags", void 0);
__decorate([
    typeorm_1.Column({
        type: 'boolean',
        default: false,
    }),
    __metadata("design:type", Boolean)
], PsrobjectEntity.prototype, "hidden", void 0);
__decorate([
    typeorm_1.ManyToOne(type => department_entity_1.DepartmentEntity, department => department.psrObjects),
    __metadata("design:type", department_entity_1.DepartmentEntity)
], PsrobjectEntity.prototype, "department", void 0);
__decorate([
    typeorm_1.ManyToOne(type => box_entity_1.BoxEntity, box => box.psrObjects),
    __metadata("design:type", box_entity_1.BoxEntity)
], PsrobjectEntity.prototype, "box", void 0);
PsrobjectEntity = __decorate([
    typeorm_1.Entity('psrobject')
], PsrobjectEntity);
exports.PsrobjectEntity = PsrobjectEntity;
//# sourceMappingURL=psrobject.entity.js.map