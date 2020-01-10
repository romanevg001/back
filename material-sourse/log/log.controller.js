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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const _1 = require(".");
const dtos_1 = require("./dtos");
/**
 * The Remote-Controller, which is the API
 * interface for Remote-Operations.
 */
let LogController = class LogController {
    /**
     * Initializes the controller
     */
    constructor() {
        this.logger = new _1.LogService('LXDHubWeb');
    }
    /**
     * Returns all remotes
     */
    log(log) {
        const message = log.message;
        if (log.level === 'WARN') {
            this.logger.warn(message);
        }
        else if (log.level === 'ERROR') {
            this.logger.error(message);
        }
        else {
            this.logger.log(message);
        }
        return common_1.HttpStatus.OK;
    }
};
__decorate([
    common_1.Post(''),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.LogDto]),
    __metadata("design:returntype", void 0)
], LogController.prototype, "log", null);
LogController = __decorate([
    common_1.Controller('/api/v1/log'),
    __metadata("design:paramtypes", [])
], LogController);
exports.LogController = LogController;
//# sourceMappingURL=log.controller.js.map