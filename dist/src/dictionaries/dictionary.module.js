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
const region_entity_1 = require("./regions/region.entity");
const department_entity_1 = require("./departments/department.entity");
const dictionary_resolver_1 = require("./dictionary.resolver");
const dictionary_service_1 = require("./dictionary.service");
const dictionary_controller_1 = require("./dictionary.controller");
const psrobject_entity_1 = require("../psrobject/psrobject.entity");
let DictionaryModule = class DictionaryModule {
};
DictionaryModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([region_entity_1.RegionEntity, department_entity_1.DepartmentEntity, psrobject_entity_1.PsrobjectEntity])],
        controllers: [dictionary_controller_1.DictionaryController],
        providers: [dictionary_service_1.DictionaryService, dictionary_resolver_1.DictionaryResolver],
    })
], DictionaryModule);
exports.DictionaryModule = DictionaryModule;
//# sourceMappingURL=dictionary.module.js.map