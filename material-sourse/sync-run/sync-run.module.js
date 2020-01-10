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
const db_1 = require("@lxdhub/db");
const sync_run_repository_1 = require("./sync-run.repository");
const sync_run_service_1 = require("./sync-run.service");
const factories_1 = require("./factories");
const sync_run_controller_1 = require("./sync-run.controller");
let SyncRunModule = class SyncRunModule {
};
SyncRunModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([db_1.SyncRun, sync_run_repository_1.SyncRunRepository])],
        providers: [sync_run_service_1.SyncRunService, factories_1.SyncRunListResponseFactory],
        controllers: [sync_run_controller_1.SyncRunController]
    })
], SyncRunModule);
exports.SyncRunModule = SyncRunModule;
//# sourceMappingURL=sync-run.module.js.map