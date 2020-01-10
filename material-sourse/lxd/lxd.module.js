"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const lxd_service_1 = require("./lxd.service");
const factories_1 = require("./factories");
const third_party_1 = require("../third-party/");
/**
 * The LXDModule, which bundles all
 * operational or processable LXD related
 * modules, controllers and components
 */
let LXDModule = class LXDModule {
};
LXDModule = __decorate([
    common_1.Module({
        imports: [],
        providers: [lxd_service_1.LXDService, factories_1.SourceImageFactory, third_party_1.AxiosProvider],
        exports: [lxd_service_1.LXDService]
    })
], LXDModule);
exports.LXDModule = LXDModule;
//# sourceMappingURL=lxd.module.js.map