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
const common_1 = require("@nestjs/common");
const common_2 = require("../common");
const lxd_service_1 = require("../lxd/lxd.service");
const search_1 = require("../search");
const factories_1 = require("./factories");
const image_repository_1 = require("./image.repository");
const remote_1 = require("../remote");
/**
 * Interface between the Database and API for
 * Image operations.
 */
let ImageService = class ImageService {
    /**
     * Initialized the Image Service.
     * @param imageRepository The database interface for image operations
     * @param imageListItemFactory The api-image-interface
     * @param imageDetaiLFactory The api-image-detail-interface
     */
    constructor(imageRepository, imageListItemFactory, imageDetailFactory, searchService, remoteService, imageSearchDictionary, lxdService) {
        this.imageRepository = imageRepository;
        this.imageListItemFactory = imageListItemFactory;
        this.imageDetailFactory = imageDetailFactory;
        this.searchService = searchService;
        this.remoteService = remoteService;
        this.imageSearchDictionary = imageSearchDictionary;
        this.lxdService = lxdService;
    }
    /**
     * Returns images, limited by the given pagination options, filtered
     * by the query parameter and transforms the database images into data-transfer-objects
     * @param remoteName The name of the remote
     * @param query The The query-string which filters the image. Search for image os name or arch Name
     * @param pagination The options to paginate through the request data
     */
    async findByRemote(remoteName, pagination, query) {
        const search = query ?
            this.searchService.getLiteral(query, this.imageSearchDictionary, 'desc') :
            {};
        const remote = await this.remoteService.findByName(remoteName);
        const [images, total] = await this.imageRepository.findByRemote(remote.id, pagination, search);
        // Return the custom pagination response, so the
        // data is wrapped around with metadata
        return new common_2.PaginationResponseDto(this.imageListItemFactory.entitiesToDto(images), total, pagination);
    }
    /**
     * Finds one image and returns detailed image information
     * in a DTO.
     * @param fingerprint The fingerprint of the image
     * @throws {Error} Will throw an error if the image is not found
     */
    async findOne(fingerprint) {
        // Fetch the image from the database
        const image = await this.imageRepository.findOneByFingerprint(fingerprint);
        // Map the data around a response and map the
        // database data to DTOs
        return new common_2.ResponseDto(this.imageDetailFactory.entityToDto(image));
    }
    /**
     * Clones an image to a specific remote
     * @param imageId The id of the image, which should get cloned
     * @param cloneImageDto The dto, which contains the remote information
     */
    async cloneImage(imageId, cloneImageDto) {
        // Get image from database
        const image = await this.imageRepository.findOneItem(imageId);
        if (!image)
            throw new common_1.NotFoundException('Image not found');
        const sourceRemote = await this.remoteService.findById(cloneImageDto.sourceRemoteId);
        if (!sourceRemote)
            throw new common_1.NotFoundException('Source Remote not found');
        const destinationRemote = await this.remoteService.findById(cloneImageDto.destinationRemoteId);
        if (!destinationRemote)
            throw new common_1.NotFoundException('Destination Remote not found');
        const uuid = await this.lxdService.cloneImage(image, sourceRemote, destinationRemote);
        return new common_2.ResponseDto({ uuid });
    }
};
ImageService = __decorate([
    __param(5, common_1.Inject('ImageSearchDictionary')),
    __param(6, common_1.Inject('LXDService')),
    __metadata("design:paramtypes", [image_repository_1.ImageRepository,
        factories_1.ImageListItemFactory,
        factories_1.ImageDetailFactory,
        search_1.SearchService,
        remote_1.RemoteService, Array, lxd_service_1.LXDService])
], ImageService);
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map