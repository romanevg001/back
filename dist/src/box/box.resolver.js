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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const box_service_1 = require("./box.service");
const auth_guard_1 = require("src/shared/auth.guard");
let BoxResolver = class BoxResolver {
    constructor(boxService) {
        this.boxService = boxService;
    }
    boxes(page) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.boxService.readList(page);
        });
    }
    box(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.boxService.read(id);
        });
    }
    createBox(name, psrObjectsIds) {
        const data = { name, psrObjectsIds };
        return this.boxService.create(data);
    }
};
__decorate([
    graphql_1.Query(),
    __param(0, graphql_1.Args('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BoxResolver.prototype, "boxes", null);
__decorate([
    graphql_1.Query(),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BoxResolver.prototype, "box", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, graphql_1.Args('name')),
    __param(1, graphql_1.Args('psrObjectsIds')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", void 0)
], BoxResolver.prototype, "createBox", null);
BoxResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [box_service_1.BoxService])
], BoxResolver);
exports.BoxResolver = BoxResolver;
//# sourceMappingURL=box.resolver.js.map