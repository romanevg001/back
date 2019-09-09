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
const psrobject_entity_1 = require("./psrobject.entity");
const psrobject_repository_1 = require("./psrobject.repository");
const department_entity_1 = require("../dictionaries/departments/department.entity");
const region_entity_1 = require("../dictionaries/regions/region.entity");
const tag_entity_1 = require("../tag/tag.entity");
const type_entity_1 = require("../type/type.entity");
let PsrobjectService = class PsrobjectService {
    constructor(psrobjectRepository, departmentRepository, regionRepository, tagRepository, typeRepository, psrobjectRepository2) {
        this.psrobjectRepository = psrobjectRepository;
        this.departmentRepository = departmentRepository;
        this.regionRepository = regionRepository;
        this.tagRepository = tagRepository;
        this.typeRepository = typeRepository;
        this.psrobjectRepository2 = psrobjectRepository2;
    }
    getPsrobject(filterPsrobjectDTO, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.psrobjectRepository2.getPsrobject(filterPsrobjectDTO, user);
        });
    }
    getList(page = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield this.psrobjectRepository.find({
                relations: ['department', 'region', 'tags', 'type'],
                take: 25,
                skip: 25 * (page - 1),
            });
            return list;
        });
    }
    read(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.psrobjectRepository.findOne({ where: { id }, relations: ['department', 'region', 'tags', 'type'] });
            return item;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            let updatedData = data;
            let psrobject = yield this.psrobjectRepository.findOne({ where: { id }, relations: ['department', 'region', 'tags', 'type'] });
            if (data.departmentId) {
                const department = yield this.departmentRepository.findOne({ where: { id: data.departmentId } });
                updatedData = Object.assign({}, updatedData, { department });
                delete updatedData.departmentId;
            }
            if (data.regionId) {
                const region = yield this.regionRepository.findOne({ where: { id: data.regionId } });
                updatedData = Object.assign({}, updatedData, { region });
                delete updatedData.regionId;
            }
            if (data.tagsId) {
                const tags = yield this.tagRepository.find({ where: data.tagsId.map(el => ({ id: el })) });
                updatedData = Object.assign({}, updatedData, { tags });
                delete updatedData.tagsId;
            }
            if (data.typeId) {
                const type = yield this.typeRepository.findOne({ where: { id: data.typeId } });
                updatedData = Object.assign({}, updatedData, { type });
                delete updatedData.typeId;
            }
            yield this.psrobjectRepository.update(id, updatedData);
            psrobject = yield this.psrobjectRepository.findOne({ where: { id }, relations: ['department', 'region', 'tags', 'type'] });
            return psrobject;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const department = yield this.departmentRepository.findOne({ where: { id: data.departmentId } });
            const region = yield this.regionRepository.findOne({ where: { id: data.regionId } });
            const tags = yield this.tagRepository.find({ where: data.tagsId.map(el => ({ id: el })) });
            const type = yield this.typeRepository.findOne({ where: { id: data.typeId } });
            const psrobject = yield this.psrobjectRepository.create(Object.assign({}, data, { department, region, tags, type }));
            yield this.psrobjectRepository.save(psrobject);
            return psrobject;
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const psrobject = yield this.psrobjectRepository.findOne({ where: { id } });
            yield this.psrobjectRepository.remove(psrobject);
            return psrobject;
        });
    }
};
PsrobjectService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(psrobject_entity_1.PsrobjectEntity)),
    __param(1, typeorm_2.InjectRepository(department_entity_1.DepartmentEntity)),
    __param(2, typeorm_2.InjectRepository(region_entity_1.RegionEntity)),
    __param(3, typeorm_2.InjectRepository(tag_entity_1.TagEntity)),
    __param(4, typeorm_2.InjectRepository(type_entity_1.TypeEntity)),
    __param(5, typeorm_2.InjectRepository(psrobject_repository_1.PsrobjectRepository)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        psrobject_repository_1.PsrobjectRepository])
], PsrobjectService);
exports.PsrobjectService = PsrobjectService;
//# sourceMappingURL=psrobject.service.js.map