"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AppSettingsModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const fs_provider_1 = require("../third-party/fs.provider");
/**
 * The AppSettingsModule, which bundles all
 * operational or processable app-settings related
 * modules, controllers and components
 */
let AppSettingsModule = AppSettingsModule_1 = class AppSettingsModule {
    static forRoot(settings) {
        const apiSettingsProvider = {
            provide: 'LXDHubAPISettings',
            useFactory: () => settings
        };
        return {
            module: AppSettingsModule_1,
            providers: [
                fs_provider_1.FsProvider,
                apiSettingsProvider
            ],
            exports: [
                apiSettingsProvider
            ]
        };
    }
};
AppSettingsModule = AppSettingsModule_1 = __decorate([
    common_1.Module({}),
    common_1.Global()
], AppSettingsModule);
exports.AppSettingsModule = AppSettingsModule;
//# sourceMappingURL=app-settings.module.js.map