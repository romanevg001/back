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
const box_service_1 = require("./box.service");
const passport_1 = require("@nestjs/passport");
const box_dto_1 = require("./box.dto");
let BoxController = class BoxController {
    constructor(boxService) {
        this.boxService = boxService;
    }
    readList() {
        return this.boxService.readList();
    }
    read(id) {
        return this.boxService.read(id);
    }
    create(data) {
        return this.boxService.create(data);
    }
};
__decorate([
    common_1.Get(),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BoxController.prototype, "readList", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BoxController.prototype, "read", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(passport_1.AuthGuard()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [box_dto_1.BoxRQ]),
    __metadata("design:returntype", void 0)
], BoxController.prototype, "create", null);
BoxController = __decorate([
    common_1.Controller('api/box'),
    __metadata("design:paramtypes", [box_service_1.BoxService])
], BoxController);
exports.BoxController = BoxController;
//# sourceMappingURL=box.controller.js.map