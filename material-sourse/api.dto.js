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
const swagger_1 = require("@nestjs/swagger");
class APILinks {
}
__decorate([
    swagger_1.ApiModelProperty({ description: 'The homepage url of the package' }),
    __metadata("design:type", String)
], APILinks.prototype, "homepage", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'The bug report url of the package' }),
    __metadata("design:type", String)
], APILinks.prototype, "bug_report", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'The repository url of the package' }),
    __metadata("design:type", String)
], APILinks.prototype, "repository", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: ' The api documentation url' }),
    __metadata("design:type", String)
], APILinks.prototype, "docs", void 0);
exports.APILinks = APILinks;
class APIDto {
}
__decorate([
    swagger_1.ApiModelProperty({ description: 'The version of the API' }),
    __metadata("design:type", String)
], APIDto.prototype, "api_version", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'The version of the npm package of the running API' }),
    __metadata("design:type", String)
], APIDto.prototype, "package_version", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'The name of the npm package' }),
    __metadata("design:type", String)
], APIDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'The description of the npm package' }),
    __metadata("design:type", String)
], APIDto.prototype, "description", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'Further links related to the API' }),
    __metadata("design:type", APILinks)
], APIDto.prototype, "_links", void 0);
exports.APIDto = APIDto;
//# sourceMappingURL=api.dto.js.map