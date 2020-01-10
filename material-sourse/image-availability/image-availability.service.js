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
const db_1 = require("@lxdhub/db");
const typeorm_1 = require("@nestjs/typeorm");
const image_availability_repository_1 = require("./image-availability.repository");
/**
 * Interface between the Database and API for
 * ImageAvailability operations.
 */
let ImageAvailabilityService = class ImageAvailabilityService {
    /**
     * Initialized the ImageAvailabilityService.
     * @param imageAvailability The image availability repository
     */
    constructor(imageAvailabilityRepository) {
        this.imageAvailabilityRepository = imageAvailabilityRepository;
    }
    /**
     * Creates or returns the image availability entity and updates it
     * @param image The image from the database
     * @param remote The remote from the database
     * @param available If the image is on the given remote available
     */
    async getOrCreate(image, remote, available) {
        let imageAvailabilty = await this.imageAvailabilityRepository.getImageByRemoteAndImage(remote.id, image.id);
        if (!imageAvailabilty) {
            // Create a new one
            imageAvailabilty = new db_1.ImageAvailability();
            imageAvailabilty.remote = remote;
            imageAvailabilty.image = image;
            imageAvailabilty.available = available;
            imageAvailabilty = await this.imageAvailabilityRepository.create(imageAvailabilty);
        }
        else {
            // Just update
            imageAvailabilty.available = available;
            imageAvailabilty = await this.imageAvailabilityRepository.save(imageAvailabilty);
        }
        return imageAvailabilty;
    }
};
ImageAvailabilityService = __decorate([
    __param(0, typeorm_1.InjectRepository(db_1.ImageAvailability)),
    __metadata("design:paramtypes", [image_availability_repository_1.ImageAvailabilityRepository])
], ImageAvailabilityService);
exports.ImageAvailabilityService = ImageAvailabilityService;
//# sourceMappingURL=image-availability.service.js.map