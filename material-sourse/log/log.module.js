"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const log_controller_1 = require("./log.controller");
let LogModule = 
/**
 * The log module, which bundles all
 * operational or processable log related
 * modules, controllers and components
 */
class LogModule {
};
LogModule = __decorate([
    common_1.Module({
        controllers: [log_controller_1.LogController],
    })
    /**
     * The log module, which bundles all
     * operational or processable log related
     * modules, controllers and components
     */
], LogModule);
exports.LogModule = LogModule;
//# sourceMappingURL=log.module.js.map