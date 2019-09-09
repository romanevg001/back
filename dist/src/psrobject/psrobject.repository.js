"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const typeorm_1 = require("typeorm");
const psrobject_entity_1 = require("./psrobject.entity");
const common_1 = require("@nestjs/common");
let PsrobjectRepository = class PsrobjectRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger('PsrobjectRepository');
    }
    getPsrobject(filterPsrobjectDTO, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { status, search } = filterPsrobjectDTO;
            const query = this.createQueryBuilder('PsrobjectEntity');
            this.logger.verbose(`user: ${user.username}`);
            if (status) {
                query.andWhere('PsrobjectEntity.hidden = :status', { status });
            }
            if (search) {
                query.andWhere('PsrobjectEntity.title LIKE :search OR PsrobjectEntity.choiceJustification LIKE :search ', { search: `%${search}%` });
            }
            try {
                const psrobjects = yield query.getMany();
                return psrobjects;
            }
            catch (err) {
                this.logger.error(`Failed get tasks for user "${user.username}", DTO: ${JSON.stringify(filterPsrobjectDTO)} `, err.stack);
            }
        });
    }
};
PsrobjectRepository = __decorate([
    typeorm_1.EntityRepository(psrobject_entity_1.PsrobjectEntity)
], PsrobjectRepository);
exports.PsrobjectRepository = PsrobjectRepository;
//# sourceMappingURL=psrobject.repository.js.map