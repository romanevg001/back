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
const psrobject_service_1 = require("./psrobject.service");
const tag_service_1 = require("src/tag/tag.service");
const type_service_1 = require("src/type/type.service");
const dictionary_service_1 = require("src/dictionaries/dictionary.service");
let PsrobjectResolver = class PsrobjectResolver {
    constructor(psrobjectService, tagService, typeService, dictionaryService) {
        this.psrobjectService = psrobjectService;
        this.tagService = tagService;
        this.typeService = typeService;
        this.dictionaryService = dictionaryService;
    }
    psrobjects(page) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.psrobjectService.getList(page);
        });
    }
    psrobject(id) {
        return this.psrobjectService.read(id);
    }
    tags(psrobject) {
        const { id } = psrobject;
        return this.tagService.getTagsByPsrObject(id);
    }
    type(psrobject) {
        const { id } = psrobject;
        return this.typeService.getTypesByPsrObject(id);
    }
    department(psrobject) {
        const { id } = psrobject;
        return this.dictionaryService.getDepartmentByPsrObject(id);
    }
    region(psrobject) {
        const { id } = psrobject;
        return this.dictionaryService.getRegionByPsrObject(id);
    }
};
__decorate([
    graphql_1.Query(),
    __param(0, graphql_1.Args('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PsrobjectResolver.prototype, "psrobjects", null);
__decorate([
    graphql_1.Query(),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PsrobjectResolver.prototype, "psrobject", null);
__decorate([
    graphql_1.ResolveProperty(),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PsrobjectResolver.prototype, "tags", null);
__decorate([
    graphql_1.ResolveProperty(),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PsrobjectResolver.prototype, "type", null);
__decorate([
    graphql_1.ResolveProperty(),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PsrobjectResolver.prototype, "department", null);
__decorate([
    graphql_1.ResolveProperty(),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PsrobjectResolver.prototype, "region", null);
PsrobjectResolver = __decorate([
    graphql_1.Resolver('Psrobject'),
    __metadata("design:paramtypes", [psrobject_service_1.PsrobjectService,
        tag_service_1.TagService,
        type_service_1.TypeService,
        dictionary_service_1.DictionaryService])
], PsrobjectResolver);
exports.PsrobjectResolver = PsrobjectResolver;
//# sourceMappingURL=psrobject.resolver.js.map