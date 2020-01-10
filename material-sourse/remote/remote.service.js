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
const typeorm_1 = require("@nestjs/typeorm");
const common_2 = require("../common");
const factories_1 = require("./factories");
const db_1 = require("@lxdhub/db");
const typeorm_2 = require("typeorm");
/**
 * Interface between the Database and API for
 * Remote operations.
 */
let RemoteService = class RemoteService {
    /**
     * Initializes the RemoteService.
     */
    constructor(remoteFactory, remoteRepository) {
        this.remoteFactory = remoteFactory;
        this.remoteRepository = remoteRepository;
    }
    /**
     * Returns all remotes and
     * transforms the database remotes into data-transfer-objects
     */
    async findAll() {
        const [remotes] = await this.remoteRepository
            .createQueryBuilder('remote')
            .getManyAndCount();
        return new common_2.ResponseDto(this.remoteFactory.entitiesToDto(remotes));
    }
    /**
     * Returns a remote by the given name
     * @param {string} name The name of the remote
     *
     * @exception {NotFoundException} Gets the the given name does not exist in the database
     */
    async findByName(name) {
        let remote;
        try {
            remote = await this.remoteRepository.findOne({ where: { name } });
            if (!remote) {
                throw new common_1.NotFoundException(`Remote #${name} not found`);
            }
            return remote;
        }
        catch (err) {
            throw new common_1.NotFoundException(`Remote '${name}' not found`);
        }
    }
    /**
     * Returns a remote by the given id
     * @param {number} id The id of the remote
     *
     * @exception {NotFoundException} Gets the the given id does not exist in the database
     */
    async findById(id) {
        let remote;
        try {
            remote = await this.remoteRepository.findOne({ where: { id } });
            if (!remote) {
                throw new common_1.NotFoundException(`Remote #${id} not found`);
            }
            return remote;
        }
        catch (err) {
            throw new common_1.NotFoundException(`Remote #${id} not found`);
        }
    }
};
RemoteService = __decorate([
    common_1.Injectable(),
    __param(1, typeorm_1.InjectRepository(db_1.Remote)),
    __metadata("design:paramtypes", [factories_1.RemoteFactory,
        typeorm_2.Repository])
], RemoteService);
exports.RemoteService = RemoteService;
//# sourceMappingURL=remote.service.js.map