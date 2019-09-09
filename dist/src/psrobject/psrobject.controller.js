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
const psrobject_service_1 = require("./psrobject.service");
const psrobject_dto_1 = require("./psrobject.dto");
const filter_psrobject_dto_1 = require("./filter-psrobject.dto");
const validation_pipe_1 = require("src/shared/validation.pipe");
const user_decorator_1 = require("src/shared/user.decorator");
const user_entity_1 = require("src/user/user.entity");
const common_2 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let PsrobjectController = class PsrobjectController {
    constructor(psrobjectService) {
        this.psrobjectService = psrobjectService;
        this.logger = new common_2.Logger('PsrobjectController');
    }
    getPsrobject(filterPsrobjectDTO, user) {
        this.logger.verbose(`User "${user.username}" retriving all psrobjects. Filter: ${JSON.stringify(filterPsrobjectDTO)}`);
        return this.psrobjectService.getPsrobject(filterPsrobjectDTO, user);
    }
    getList(page) {
        this.logger.verbose(`User  retriving all psrobjects.`);
        return this.psrobjectService.getList(page);
    }
    getOne(user) {
        return this.psrobjectService.read(user);
    }
    create(data) {
        return this.psrobjectService.create(data);
    }
    update(id, data) {
        return this.psrobjectService.update(id, data);
    }
    destroy(id) {
        return this.psrobjectService.destroy(id);
    }
};
__decorate([
    common_1.Get('objects'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __param(0, common_1.Query(validation_pipe_1.ValidationPipe)),
    __param(1, user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_psrobject_dto_1.FilterPsrobjectDTO,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], PsrobjectController.prototype, "getPsrobject", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PsrobjectController.prototype, "getList", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PsrobjectController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [psrobject_dto_1.PsrobjectRQ]),
    __metadata("design:returntype", void 0)
], PsrobjectController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PsrobjectController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PsrobjectController.prototype, "destroy", null);
PsrobjectController = __decorate([
    common_1.Controller('api/psrobject'),
    __metadata("design:paramtypes", [psrobject_service_1.PsrobjectService])
], PsrobjectController);
exports.PsrobjectController = PsrobjectController;
//# sourceMappingURL=psrobject.controller.js.map