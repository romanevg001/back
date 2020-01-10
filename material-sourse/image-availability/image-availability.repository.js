"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("@lxdhub/db");
const typeorm_1 = require("typeorm");
/**
 * The ImageAvailabilityRepository represents the
 * interface between the appliaction image availability entity
 * and the database.
 */
let ImageAvailabilityRepository = class ImageAvailabilityRepository extends typeorm_1.Repository {
    /**
     * Returns the image availability by the remote and image id
     * @param remoteId The remote id
     * @param imageId The image id
     */
    async getImageByRemoteAndImage(remoteId, imageId) {
        return await this
            .createQueryBuilder('imageAvailability')
            .leftJoinAndSelect('imageAvailability.image', 'image')
            .leftJoinAndSelect('imageAvailability.remote', 'remote')
            .where('remote.id = :remoteId', { remoteId })
            .andWhere('image.id = :imageId', { imageId })
            .getOne();
    }
};
ImageAvailabilityRepository = __decorate([
    typeorm_1.EntityRepository(db_1.ImageAvailability)
], ImageAvailabilityRepository);
exports.ImageAvailabilityRepository = ImageAvailabilityRepository;
/**
 * This is a workaround, until custom TypeOrm
 * Repositories get supported by NestJS/TypeOrm.
 * See Github nestjs/typeorm#14
 *
 * https://github.com/nestjs/typeorm/issues/14
 */
exports.ImageAvailabilityRepositoryProvider = {
    provide: 'ImageAvailabilityRepository',
    useFactory: (connection) => connection.getCustomRepository(ImageAvailabilityRepository),
    inject: [typeorm_1.Connection]
};
//# sourceMappingURL=image-availability.repository.js.map