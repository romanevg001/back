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
const dictionary_service_1 = require("./dictionary.service");
const region_dto_1 = require("./regions/region.dto");
const department_dto_1 = require("./departments/department.dto");
let DictionaryController = class DictionaryController {
    constructor(dictionaryService) {
        this.dictionaryService = dictionaryService;
    }
    readRegions() {
        return this.dictionaryService.readRegions();
    }
    createRegion(data) {
        return this.dictionaryService.createRegion(data);
    }
    deleteRegion(id) {
        return this.dictionaryService.destroyRegion(id);
    }
    readDepartments() {
        return this.dictionaryService.readDepartments();
    }
    createDepartment(data) {
        return this.dictionaryService.createDepartment(data);
    }
    deleteDepartment(id) {
        return this.dictionaryService.destroyDepartment(id);
    }
};
__decorate([
    common_1.Get('/regions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DictionaryController.prototype, "readRegions", null);
__decorate([
    common_1.Post('/regions'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [region_dto_1.RegionDTO]),
    __metadata("design:returntype", void 0)
], DictionaryController.prototype, "createRegion", null);
__decorate([
    common_1.Delete('/regions/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DictionaryController.prototype, "deleteRegion", null);
__decorate([
    common_1.Get('/department'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DictionaryController.prototype, "readDepartments", null);
__decorate([
    common_1.Post('/department'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [department_dto_1.DepartmentDTO]),
    __metadata("design:returntype", void 0)
], DictionaryController.prototype, "createDepartment", null);
__decorate([
    common_1.Delete('/department/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DictionaryController.prototype, "deleteDepartment", null);
DictionaryController = __decorate([
    common_1.Controller('api'),
    __metadata("design:paramtypes", [dictionary_service_1.DictionaryService])
], DictionaryController);
exports.DictionaryController = DictionaryController;
//# sourceMappingURL=dictionary.controller.js.map