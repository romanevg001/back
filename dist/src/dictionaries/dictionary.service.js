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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const region_entity_1 = require("./regions/region.entity");
const department_entity_1 = require("./departments/department.entity");
const psrobject_entity_1 = require("../psrobject/psrobject.entity");
let DictionaryService = class DictionaryService {
    constructor(regionRepository, departmentRepository, psrobjectRepository) {
        this.regionRepository = regionRepository;
        this.departmentRepository = departmentRepository;
        this.psrobjectRepository = psrobjectRepository;
    }
    readRegions() {
        return __awaiter(this, void 0, void 0, function* () {
            const regions = yield this.regionRepository.find({ relations: ['psrObjects'] });
            return regions;
        });
    }
    createRegion(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.regionRepository.save(data);
            return data;
        });
    }
    destroyRegion(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const region = yield this.regionRepository.findOne(id);
            yield this.regionRepository.remove(region);
            return region;
        });
    }
    getRegionByPsrObject(PsrObjectId) {
        return __awaiter(this, void 0, void 0, function* () {
            const psrobject = yield this.psrobjectRepository.findOne({ where: { id: PsrObjectId }, relations: ['region'] });
            return psrobject.region;
        });
    }
    readDepartments() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.departmentRepository.find({ relations: ['psrObjects'] });
            return data;
        });
    }
    createDepartment(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.departmentRepository.save(data);
            return data;
        });
    }
    destroyDepartment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const department = yield this.departmentRepository.findOne(id);
            yield this.departmentRepository.remove(department);
            return department;
        });
    }
    getDepartmentByPsrObject(PsrObjectId) {
        return __awaiter(this, void 0, void 0, function* () {
            const psrobject = yield this.psrobjectRepository.findOne({ where: { id: PsrObjectId }, relations: ['department'] });
            return psrobject.department;
        });
    }
};
DictionaryService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(region_entity_1.RegionEntity)),
    __param(1, typeorm_2.InjectRepository(department_entity_1.DepartmentEntity)),
    __param(2, typeorm_2.InjectRepository(psrobject_entity_1.PsrobjectEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], DictionaryService);
exports.DictionaryService = DictionaryService;
//# sourceMappingURL=dictionary.service.js.map