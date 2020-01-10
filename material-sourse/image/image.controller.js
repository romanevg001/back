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
const swagger_1 = require("@nestjs/swagger");
const _1 = require(".");
const image_service_1 = require("./image.service");
const image_list_item_interceptor_1 = require("./interceptors/image-list-item.interceptor");
/**
 * The Image Controller, which is the API
 * interface for Image-Operations.
 */
let ImageController = class ImageController {
    constructor(imageService) {
        this.imageService = imageService;
    }
    /**
     * Returns images, limited by the given pagination options and
     * filters it by the given remoteId.
     * If remoteId is not given, it takes the first remote.
     * @param options The options to paginate through the requested data
     */
    async findByRemote(options) {
        try {
            // Fetches the images
            return await this.imageService
                .findByRemote(options.remote, options, options.query ? options.query.trim() : null);
        }
        catch (err) {
            if (err instanceof TypeError) {
                // Is a search query error
                throw new common_1.BadRequestException(err.message);
            }
            else if (err instanceof common_1.NotFoundException) {
                // Not found
                throw err;
            }
            else {
                // Unknwon error. Should not occur
                throw new common_1.InternalServerErrorException('Internal Server Error');
            }
        }
    }
    /**
     * Returns a detail image with the given id
     * @param {number} fingerprint The fingerprint of the image
     */
    async findOne(fingerprint) {
        return await this.imageService.findOne(fingerprint);
    }
    /**
     * Clones the image with the given id
     * @param {number} id The id of the image
     */
    async clone(
    // Convert id to an integer
    id, cloneImageDto) {
        return await this.imageService.cloneImage(id, cloneImageDto);
    }
};
__decorate([
    common_1.Get('/'),
    common_1.UseInterceptors(image_list_item_interceptor_1.ImageListItemInterceptor),
    swagger_1.ApiResponse({ status: 200, description: 'The images have been successfully requested' }),
    swagger_1.ApiResponse({ status: 400, description: 'Bad Request' }),
    swagger_1.ApiResponse({ status: 404, description: 'Remote not found' }),
    __param(0, common_1.Query(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_1.ImageListOptions]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "findByRemote", null);
__decorate([
    common_1.Get('/:fingerprint'),
    swagger_1.ApiResponse({ status: 200, description: 'The image have been successfully requested' }),
    swagger_1.ApiResponse({ status: 400, description: 'Bad Request' }),
    __param(0, common_1.Param('fingerprint')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "findOne", null);
__decorate([
    common_1.Post('/:id/clone'),
    swagger_1.ApiResponse({ status: 200, description: 'The image have been successfully cloned' }),
    swagger_1.ApiResponse({ status: 404, description: 'Not Found' }),
    swagger_1.ApiResponse({ status: 403, description: 'Not Authorized' }),
    swagger_1.ApiResponse({ status: 500, description: 'The destination LXD remote is not reachable' }),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, _1.CloneImageDto]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "clone", null);
ImageController = __decorate([
    common_1.Controller('/api/v1/image'),
    __metadata("design:paramtypes", [image_service_1.ImageService])
], ImageController);
exports.ImageController = ImageController;
//# sourceMappingURL=image.controller.js.map