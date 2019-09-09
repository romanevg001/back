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
const type_entity_1 = require("./type.entity");
const psrobject_entity_1 = require("../psrobject/psrobject.entity");
let TypeService = class TypeService {
    constructor(typeRepository, psrobjectRepository) {
        this.typeRepository = typeRepository;
        this.psrobjectRepository = psrobjectRepository;
    }
    getTypes(page = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            const types = yield this.typeRepository.find({
                relations: ['psrObjects'],
                take: 25,
                skip: 25 * (page - 1),
            });
            return types;
        });
    }
    read(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const type = yield this.typeRepository.findOne({ where: { id }, relations: ['psrObjects'] });
            return type;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.typeRepository.save(data);
            return data;
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const type = yield this.typeRepository.findOne({ where: { id } });
            yield this.typeRepository.remove(type);
            return type;
        });
    }
    getTypesByPsrObject(PsrObjectId) {
        return __awaiter(this, void 0, void 0, function* () {
            const psrobject = yield this.psrobjectRepository.findOne({ where: { id: PsrObjectId }, relations: ['type'] });
            return psrobject.type;
        });
    }
};
TypeService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(type_entity_1.TypeEntity)),
    __param(1, typeorm_2.InjectRepository(psrobject_entity_1.PsrobjectEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], TypeService);
exports.TypeService = TypeService;
//# sourceMappingURL=type.service.js.map