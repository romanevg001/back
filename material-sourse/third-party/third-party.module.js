"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const _1 = require(".");
const axios_provider_1 = require("./axios.provider");
let ThirdPartyModule = class ThirdPartyModule {
};
ThirdPartyModule = __decorate([
    common_1.Module({
        providers: [
            _1.FsProvider,
            _1.PathProvider,
            axios_provider_1.AxiosProvider,
        ],
        exports: [
            _1.FsProvider,
            _1.PathProvider,
            axios_provider_1.AxiosProvider,
        ]
    }),
    common_1.Global()
], ThirdPartyModule);
exports.ThirdPartyModule = ThirdPartyModule;
//# sourceMappingURL=third-party.module.js.map