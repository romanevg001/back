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
const common_2 = require("../common");
const sync_run_repository_1 = require("./sync-run.repository");
const factories_1 = require("./factories");
let SyncRunService = class SyncRunService {
    constructor(syncRunRepository, syncRunFactory) {
        this.syncRunRepository = syncRunRepository;
        this.syncRunFactory = syncRunFactory;
    }
    async paginate(pagination) {
        const [syncRuns, total] = await this.syncRunRepository.paginate(pagination);
        return new common_2.PaginationResponseDto(this.syncRunFactory.entitiesToDto(syncRuns), total, pagination);
    }
};
SyncRunService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [sync_run_repository_1.SyncRunRepository,
        factories_1.SyncRunListResponseFactory])
], SyncRunService);
exports.SyncRunService = SyncRunService;
//# sourceMappingURL=sync-run.service.js.map