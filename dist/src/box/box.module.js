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
const box_entity_1 = require("./box.entity");
const box_controller_1 = require("./box.controller");
const box_resolver_1 = require("./box.resolver");
const box_service_1 = require("./box.service");
const psrobject_entity_1 = require("../psrobject/psrobject.entity");
const auth_module_1 = require("src/auth/auth.module");
let BoxModule = class BoxModule {
};
BoxModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([box_entity_1.BoxEntity, psrobject_entity_1.PsrobjectEntity]),
            auth_module_1.AuthModule,
        ],
        controllers: [box_controller_1.BoxController],
        providers: [box_resolver_1.BoxResolver, box_service_1.BoxService],
    })
], BoxModule);
exports.BoxModule = BoxModule;
//# sourceMappingURL=box.module.js.map