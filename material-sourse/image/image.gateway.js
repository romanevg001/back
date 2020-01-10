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
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/from");
require("rxjs/add/operator/map");
const _1 = require("./");
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const image_availability_service_1 = require("../image-availability/image-availability.service");
const log_service_1 = require("../log/log.service");
const lxd_service_1 = require("../lxd/lxd.service");
const image_repository_1 = require("./image.repository");
const image_service_1 = require("./image.service");
const remote_1 = require("../remote");
/**
 * Gateway for image related websocket messages
 */
let ImageGateway = class ImageGateway {
    /**
     * Initializes the component
     * @param lxdService The LXDService
     * @param remoteRepository The Remote Repository
     */
    constructor(lxdService, remoteService, imageService, imageAvailabilityService, imageRepository) {
        this.lxdService = lxdService;
        this.remoteService = remoteService;
        this.imageService = imageService;
        this.imageAvailabilityService = imageAvailabilityService;
        this.imageRepository = imageRepository;
        this.logger = new log_service_1.LogService(this.constructor.name);
    }
    /**
     * Returns the clone status
     * @param data The data sent from the user
     */
    async getCloneStatus(_, data) {
        this.logger.debug(`Getting clone status from remote #${data.destinationRemoteId} of image id #${data.imageId}`);
        let destinationRemote;
        // Get remote
        try {
            destinationRemote = await this.remoteService.findById(data.destinationRemoteId);
        }
        catch (err) {
            this.logger.error(err.message);
            throw new common_1.NotFoundException(`Could not find the remote with id #${data.destinationRemoteId}`);
        }
        // Wait until cloning is done
        this.logger.info(`Waiting for clone status for remote#${destinationRemote.id} ${destinationRemote.name}:`);
        try {
            const response = await this.lxdService.getCloneStatus(destinationRemote, data.operation);
        }
        catch (err) {
            this.logger.error(err.message);
            throw new common_1.InternalServerErrorException('Failed requesting image clone status');
        }
        this.logger.debug(`Received clone status for remote#${destinationRemote.id} ${destinationRemote.name}:`);
        // Get the given image
        const image = await this.imageRepository.findOne({ id: data.imageId });
        // Create the image availability
        await this.imageAvailabilityService.getOrCreate(image, destinationRemote, true);
        // Return image detail
        const imageDetail = await this.imageService.findOne(image.fingerprint);
        return { data: imageDetail, event: 'clone-status' };
    }
};
__decorate([
    websockets_1.SubscribeMessage('clone-status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, _1.CloneStatusDto]),
    __metadata("design:returntype", Promise)
], ImageGateway.prototype, "getCloneStatus", null);
ImageGateway = __decorate([
    websockets_1.WebSocketGateway({ namespace: 'image' }),
    __metadata("design:paramtypes", [lxd_service_1.LXDService,
        remote_1.RemoteService,
        image_service_1.ImageService,
        image_availability_service_1.ImageAvailabilityService,
        image_repository_1.ImageRepository])
], ImageGateway);
exports.ImageGateway = ImageGateway;
//# sourceMappingURL=image.gateway.js.map