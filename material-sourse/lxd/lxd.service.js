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
const https_1 = require("https");
const common_1 = require("@nestjs/common");
const __1 = require("..");
const factories_1 = require("./factories");
const log_1 = require("../log");
const third_party_1 = require("../third-party");
let LXDService = class LXDService {
    constructor(axios, sourceImageFactory, settings) {
        this.axios = axios;
        this.sourceImageFactory = sourceImageFactory;
        this.settings = settings;
        this.logger = new log_1.LogService(this.constructor.name);
    }
    getAxiosHttpsInstance() {
        const options = {
            rejectUnauthorized: false
        };
        if (this.settings.lxd && this.settings.lxd.key) {
            options.key = this.settings.lxd.key;
        }
        if (this.settings.lxd && this.settings.lxd.cert) {
            options.cert = this.settings.lxd.cert;
        }
        return this.axios.create({
            httpsAgent: new https_1.Agent(options)
        });
    }
    /**
     * Requests a new image on the given remote
     * @param url The url to which the image should be request
     * @param sourceImageDto The image
     */
    async requestNewImage(url, sourceImageDto) {
        const axios = this.getAxiosHttpsInstance();
        return (await axios.post(url, sourceImageDto)).data;
    }
    /**
     * Waits for the given operation to end
     * @param url The operation url
     */
    async waitForOperation(url) {
        const axios = this.getAxiosHttpsInstance();
        return (await axios.get(url)).data;
    }
    /**
     * Clones the image from the given sourceRemote to the given destinationRemote
     * @param image The image to be cloned
     * @param sourceRemote The source remote, from which the images comes from
     * @param destinationRemote The destination Remote
     */
    async cloneImage(image, sourceRemote, destinationRemote) {
        const sourceImageDto = this.sourceImageFactory.entityToDto(image, sourceRemote, destinationRemote);
        const url = destinationRemote.serverUrl;
        // Start operation
        try {
            const operation = await this.requestNewImage(`${url}/1.0/images`, sourceImageDto);
            // The operation uuid
            return operation.metadata.id;
        }
        catch (err) {
            if (err && err.error_code === 403) {
                throw new common_1.InternalServerErrorException('Server certificate is not valid. Contact a server administrator');
            }
            if (err && err.error_code === 500) {
                throw new common_1.InternalServerErrorException('The destination LXD remote is not reachable');
            }
            throw err;
        }
    }
    /**
     * Waits for the clone operation and returns the result
     * @param destinationRemote The destination remote
     * @param uuid The operation UUID from the LXD server
     */
    async getCloneStatus(destinationRemote, uuid) {
        return await this.waitForOperation(`${destinationRemote.serverUrl}/1.0/operations/${uuid}/wait`);
    }
};
LXDService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(third_party_1.AxiosToken)),
    __param(2, common_1.Inject('LXDHubAPISettings')),
    __metadata("design:paramtypes", [Object, factories_1.SourceImageFactory,
        __1.LXDHubAPISettings])
], LXDService);
exports.LXDService = LXDService;
//# sourceMappingURL=lxd.service.js.map