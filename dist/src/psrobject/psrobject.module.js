"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const psrobject_controller_1 = require("./psrobject.controller");
const psrobject_service_1 = require("./psrobject.service");
const psrobject_entity_1 = require("./psrobject.entity");
const psrobject_resolver_1 = require("./psrobject.resolver");
const department_entity_1 = require("../dictionaries/departments/department.entity");
const region_entity_1 = require("../dictionaries/regions/region.entity");
const tag_entity_1 = require("../tag/tag.entity");
const tag_service_1 = require("../tag/tag.service");
const type_entity_1 = require("../type/type.entity");
const type_service_1 = require("../type/type.service");
const dictionary_service_1 = require("src/dictionaries/dictionary.service");
const psrobject_repository_1 = require("./psrobject.repository");
const auth_module_1 = require("src/auth/auth.module");
let PsrobjectModule = class PsrobjectModule {
};
PsrobjectModule = __decorate([
    common_1.Module({
        imports: [
            auth_module_1.AuthModule,
            typeorm_1.TypeOrmModule.forFeature([psrobject_entity_1.PsrobjectEntity, department_entity_1.DepartmentEntity, region_entity_1.RegionEntity, tag_entity_1.TagEntity, type_entity_1.TypeEntity, psrobject_repository_1.PsrobjectRepository])
        ],
        controllers: [psrobject_controller_1.PsrobjectController],
        providers: [psrobject_service_1.PsrobjectService, psrobject_resolver_1.PsrobjectResolver, tag_service_1.TagService, type_service_1.TypeService, dictionary_service_1.DictionaryService],
    })
], PsrobjectModule);
exports.PsrobjectModule = PsrobjectModule;
//# sourceMappingURL=psrobject.module.js.map