"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("@lxdhub/db");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const image_availability_repository_1 = require("./image-availability.repository");
const image_availability_service_1 = require("./image-availability.service");
let ImageAvailabilityModule = 
/**
 * The Image Availability module, which bundles all
 * operational or processable image availability related
 * modules, controllers and components
 */
class ImageAvailabilityModule {
};
ImageAvailabilityModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([db_1.ImageAvailability]),
        ],
        controllers: [],
        providers: [
            image_availability_service_1.ImageAvailabilityService,
            image_availability_repository_1.ImageAvailabilityRepositoryProvider
        ],
        exports: [image_availability_service_1.ImageAvailabilityService]
    })
    /**
     * The Image Availability module, which bundles all
     * operational or processable image availability related
     * modules, controllers and components
     */
], ImageAvailabilityModule);
exports.ImageAvailabilityModule = ImageAvailabilityModule;
//# sourceMappingURL=image-availability.module.js.map