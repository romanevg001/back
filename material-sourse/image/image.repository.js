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
 * The image repository represents the
 * interface between the appliaction image entity
 * and the database.
 */
let ImageRepository = class ImageRepository extends typeorm_1.Repository {
    /**
     * Finds all images of an remote, filters them by the given
     * query attributes and applies the given pagination
     * options
     * @param remoteId The id of the remote
     * @param queryAttributes Array of search parameters, which should be filtered with
     * Operating Name or Architecture Name of an image
     * @param pagination The pagination options
     */
    async findByRemote(remoteId, pagination, search = {}) {
        // Get Images with the pagination options applied
        // from the database.
        let query = this
            .createQueryBuilder('image')
            // Join the remotes of the image
            .leftJoinAndSelect('image.imageAvailabilities', 'imageAvailability')
            .leftJoinAndSelect('imageAvailability.remote', 'remote')
            // Join the architecture and operating system
            .leftJoinAndSelect('image.osArchitecture', 'osArchitecture')
            .leftJoinAndSelect('osArchitecture.architecture', 'arch')
            .leftJoinAndSelect('osArchitecture.operatingSystem', 'os')
            // Check if is the requested remote
            .where('remote.id = :remoteId', { remoteId })
            // if the image is available on that remote
            .andWhere('imageAvailability.available = :available', { available: true });
        // Filter for distribution
        if (search.distribution) {
            query = query.andWhere('lower(os.distribution) LIKE lower(:os) ', { os: `%${search.distribution}%` });
        }
        // Filter for description
        if (search.desc) {
            query = query.andWhere('lower(image.description) LIKE lower(:desc) ', { desc: `%${search.desc}%` });
        }
        // Filter for architecture
        if (search.arch) {
            query = query.andWhere('(lower(arch.processorName) LIKE :arch OR lower(arch.humanName) LIKE lower(:arch))', { arch: `%${search.arch}%` });
        }
        // Filter for fingerprint
        if (search.fingerprint) {
            query = query.andWhere('lower(image.fingerprint) LIKE lower(:fingerprint)', { fingerprint: `%${search.fingerprint}%` });
        }
        // Filter for version
        if (search.version) {
            query = query.andWhere('lower(os.version) LIKE lower(:version)', { version: `%${search.version}%` });
        }
        // Filter for release
        if (search.release) {
            query = query.andWhere('lower(os.release) LIKE Lower(:release)', { release: `%${search.release}%` });
        }
        // Apply pagintaion options
        return await query.offset(pagination.offset)
            .limit(pagination.limit)
            .getManyAndCount();
    }
    /**
     * Finds the image with the given id
     * @param pagination The pagination options
     */
    async findOneItem(id) {
        return await this
            .createQueryBuilder('image')
            .where('image.id = :id', { id })
            .leftJoinAndSelect('image.aliases', 'alias')
            .leftJoinAndSelect('image.osArchitecture', 'osArchitecture')
            .leftJoinAndSelect('osArchitecture.architecture', 'arch')
            .leftJoinAndSelect('osArchitecture.operatingSystem', 'os')
            .leftJoinAndSelect('image.imageAvailabilities', 'imageAvailability')
            .leftJoinAndSelect('imageAvailability.remote', 'remote')
            .getOne();
    }
    async findOneByFingerprint(fingerprint) {
        return await this
            .createQueryBuilder('image')
            .where('fingerprint LIKE :fingerprint', { fingerprint: `${fingerprint}%` })
            .leftJoinAndSelect('image.aliases', 'alias')
            .leftJoinAndSelect('image.osArchitecture', 'osArchitecture')
            .leftJoinAndSelect('osArchitecture.architecture', 'arch')
            .leftJoinAndSelect('osArchitecture.operatingSystem', 'os')
            .leftJoinAndSelect('image.imageAvailabilities', 'imageAvailability')
            .leftJoinAndSelect('imageAvailability.remote', 'remote')
            .getOne();
    }
};
ImageRepository = __decorate([
    typeorm_1.EntityRepository(db_1.Image)
], ImageRepository);
exports.ImageRepository = ImageRepository;
//# sourceMappingURL=image.repository.js.map