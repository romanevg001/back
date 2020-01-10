"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const db_1 = require("@lxdhub/db");
/**
 * This repository represents the interface between the appliaction
 * repository entity and the database.
 */
let SyncRunRepository = class SyncRunRepository extends typeorm_1.Repository {
    /**
     * Paginate through syncronization runs
     * @param pagination The pagination options
     */
    paginate(pagination) {
        return this.createQueryBuilder()
            .offset(pagination.offset)
            .limit(pagination.limit)
            .orderBy('created', 'DESC')
            .getManyAndCount();
    }
};
SyncRunRepository = __decorate([
    typeorm_1.EntityRepository(db_1.SyncRun)
], SyncRunRepository);
exports.SyncRunRepository = SyncRunRepository;
//# sourceMappingURL=sync-run.repository.js.map