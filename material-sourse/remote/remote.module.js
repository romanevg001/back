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
const factories_1 = require("./factories");
const remote_controller_1 = require("./remote.controller");
const remote_service_1 = require("./remote.service");
const db_1 = require("@lxdhub/db");
let RemoteModule = 
/**
 * The remote module, which bundles all
 * operational or processable remote related
 * modules, controllers and components
 */
class RemoteModule {
};
RemoteModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([db_1.Remote])
        ],
        controllers: [remote_controller_1.RemoteController],
        providers: [
            remote_service_1.RemoteService,
            factories_1.RemoteFactory,
        ],
        exports: [
            remote_service_1.RemoteService,
            factories_1.RemoteFactory,
        ]
    })
    /**
     * The remote module, which bundles all
     * operational or processable remote related
     * modules, controllers and components
     */
], RemoteModule);
exports.RemoteModule = RemoteModule;
//# sourceMappingURL=remote.module.js.map