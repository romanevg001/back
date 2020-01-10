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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const remote_service_1 = require("./remote.service");
const common_2 = require("../common");
/**
 * The Remote-Controller, which is the API
 * interface for Remote-Operations.
 */
let RemoteController = class RemoteController {
    constructor(remoteService) {
        this.remoteService = remoteService;
    }
    /**
     * Returns all remotes
     */
    async findAll() {
        return await this.remoteService.findAll();
    }
};
__decorate([
    common_1.Get('/'),
    swagger_1.ApiResponse({
        type: common_2.ResponseDto,
        status: 200
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RemoteController.prototype, "findAll", null);
RemoteController = __decorate([
    common_1.Controller('/api/v1/remote'),
    __metadata("design:paramtypes", [remote_service_1.RemoteService])
], RemoteController);
exports.RemoteController = RemoteController;
//# sourceMappingURL=remote.controller.js.map