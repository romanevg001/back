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
let SearchModule = 
/**
 * The SearchModule, which bundles all
 * operational or processable searche related
 * modules, controllers and components
 */
class SearchModule {
};
SearchModule = __decorate([
    common_1.Module({
        providers: [
            _1.SearchService
        ],
        exports: [
            _1.SearchService
        ]
    })
    /**
     * The SearchModule, which bundles all
     * operational or processable searche related
     * modules, controllers and components
     */
], SearchModule);
exports.SearchModule = SearchModule;
//# sourceMappingURL=search.module.js.map