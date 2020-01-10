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
const common_2 = require("../common");
const sync_run_service_1 = require("./sync-run.service");
const swagger_1 = require("@nestjs/swagger");
let SyncRunController = class SyncRunController {
    constructor(syncRunService) {
        this.syncRunService = syncRunService;
    }
    async findAll(paginate) {
        return await this.syncRunService.paginate(paginate);
    }
};
__decorate([
    common_1.Get('/'),
    swagger_1.ApiResponse({ status: 200, description: 'The sync runs have been succesfully request' }),
    __param(0, common_1.Query(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_2.PaginationOptionsDto]),
    __metadata("design:returntype", Promise)
], SyncRunController.prototype, "findAll", null);
SyncRunController = __decorate([
    common_1.Controller('/api/v1/sync-run'),
    __param(0, common_1.Inject('SyncRunService')),
    __metadata("design:paramtypes", [sync_run_service_1.SyncRunService])
], SyncRunController);
exports.SyncRunController = SyncRunController;
//# sourceMappingURL=sync-run.controller.js.map