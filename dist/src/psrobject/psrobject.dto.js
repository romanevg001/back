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
const class_validator_1 = require("class-validator");
class PsrobjectDTO {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], PsrobjectDTO.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], PsrobjectDTO.prototype, "image", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], PsrobjectDTO.prototype, "choiceJustification", void 0);
__decorate([
    class_validator_1.IsBooleanString(),
    __metadata("design:type", Boolean)
], PsrobjectDTO.prototype, "hidden", void 0);
exports.PsrobjectDTO = PsrobjectDTO;
class PsrobjectRQ extends PsrobjectDTO {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], PsrobjectRQ.prototype, "regionId", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], PsrobjectRQ.prototype, "departmentId", void 0);
__decorate([
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], PsrobjectRQ.prototype, "tagsId", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], PsrobjectRQ.prototype, "typeId", void 0);
exports.PsrobjectRQ = PsrobjectRQ;
//# sourceMappingURL=psrobject.dto.js.map