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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const api_dto_1 = require("./api.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const express_1 = require("express");
const _1 = require(".");
let AppController = 
/**
 * The root api controller
 */
class AppController {
    constructor(Fs, Path, appSettings) {
        this.Fs = Fs;
        this.Path = Path;
        this.appSettings = appSettings;
    }
    /**
     * Reads the package.json file and returns the parsed object
     */
    async getPackageJson() {
        const packageJsonPath = this.Path.join(__dirname, '../package.json');
        // @ts-ignore
        const packageJson = await this.Fs.readFile(packageJsonPath, 'utf8');
        return JSON.parse(packageJson);
    }
    /**
     * Generates the docurl using the express request object
     * and the given relative doc url
     * @param req The express request
     */
    getDocsUrl(req) {
        if (this.appSettings.docUrl) {
            return `${req.protocol}://${req.get('host')}${this.appSettings.docUrl}`;
        }
        else {
            return null;
        }
    }
    /**
     * Returns general informations about the API.
     * @param req The express request object
     */
    async apiInfo(req) {
        let packageJson;
        try {
            packageJson = await this.getPackageJson();
        }
        catch (ex) {
            throw common_1.HttpCode(500);
        }
        return {
            api_version: '1.0',
            package_version: packageJson.version,
            name: packageJson.name,
            description: packageJson.description,
            _links: {
                homepage: packageJson.homepage,
                bug_report: packageJson.bugs && packageJson.bugs.url || null,
                repository: packageJson.repository && packageJson.repository.url || null,
                docs: this.getDocsUrl(req),
            }
        };
    }
};
__decorate([
    swagger_1.ApiOperation({ title: 'API Info' }),
    swagger_1.ApiResponse({ status: 200, type: api_dto_1.APIDto }),
    common_1.Get('/'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "apiInfo", null);
AppController = __decorate([
    common_1.Controller('/api/v1')
    /**
     * The root api controller
     */
    ,
    __param(0, common_1.Inject('Fs')),
    __param(1, common_1.Inject('Path')),
    __param(2, common_1.Inject('LXDHubAPISettings')),
    __metadata("design:paramtypes", [Object, Object, _1.LXDHubAPISettings])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map