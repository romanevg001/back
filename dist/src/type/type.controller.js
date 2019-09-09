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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const type_service_1 = require("./type.service");
const type_dto_1 = require("./type.dto");
let TypeController = class TypeController {
    constructor(typeService) {
        this.typeService = typeService;
    }
    getTypees() {
        return this.typeService.getTypes();
    }
    getType(id) {
        return this.typeService.read(id);
    }
    create(data) {
        return this.typeService.create(data);
    }
    removeType(id) {
        return this.typeService.destroy(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TypeController.prototype, "getTypees", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypeController.prototype, "getType", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [type_dto_1.TypeDTO]),
    __metadata("design:returntype", void 0)
], TypeController.prototype, "create", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypeController.prototype, "removeType", null);
TypeController = __decorate([
    common_1.Controller('api/type'),
    __metadata("design:paramtypes", [type_service_1.TypeService])
], TypeController);
exports.TypeController = TypeController;
//# sourceMappingURL=type.controller.js.map