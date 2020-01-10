"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const image_availability_1 = require("../image-availability/");
const log_1 = require("../log");
const lxd_1 = require("../lxd");
const remote_1 = require("../remote");
const search_module_1 = require("../search/search.module");
const factories_1 = require("./factories");
const image_search_dictionary_const_1 = require("./image-search-dictionary.const");
const image_controller_1 = require("./image.controller");
const image_gateway_1 = require("./image.gateway");
const image_repository_1 = require("./image.repository");
const image_service_1 = require("./image.service");
const db_1 = require("@lxdhub/db");
let ImageModule = 
/**
 * The Image module, which bundles all
 * operational or processable image related
 * modules, controllers and components
 */
class ImageModule {
};
ImageModule = __decorate([
    common_1.Module({
        imports: [
            search_module_1.SearchModule,
            lxd_1.LXDModule,
            remote_1.RemoteModule,
            image_availability_1.ImageAvailabilityModule,
            log_1.LogModule,
            typeorm_1.TypeOrmModule.forFeature([db_1.Image, image_repository_1.ImageRepository])
        ],
        controllers: [image_controller_1.ImageController],
        providers: [
            image_gateway_1.ImageGateway,
            image_service_1.ImageService,
            factories_1.ImageListItemFactory,
            factories_1.ImageDetailFactory,
            image_search_dictionary_const_1.ImageSearchDictionaryProvider,
        ]
    })
    /**
     * The Image module, which bundles all
     * operational or processable image related
     * modules, controllers and components
     */
], ImageModule);
exports.ImageModule = ImageModule;
//# sourceMappingURL=image.module.js.map