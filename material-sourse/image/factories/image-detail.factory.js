"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@lxdhub/common");
const common_2 = require("@nestjs/common");
const __1 = require("..");
/**
 * Factory which produces ImageDetailDto
 */
let ImageDetailFactory = class ImageDetailFactory extends common_1.Factory {
    /**
     * Maps the alias from the database with the AliasDto
     * @param alias The alias from the database
     */
    aliasToDto(alias) {
        const aliasDto = new __1.AliasDto();
        if (alias) {
            aliasDto.name = alias.name;
            aliasDto.description = alias.description;
        }
        return aliasDto;
    }
    /**
     * Maps the architecture from the database to a architecturedto
     * @param architecture The architecture from the database
     */
    architectureToDto(architecture) {
        const architectureDto = new __1.ArchitectureDto();
        if (architecture) {
            architectureDto.humanName = architecture.humanName;
            architectureDto.processorName = architecture.processorName;
        }
        return architectureDto;
    }
    /**
     * Maps the operating system from the database to a operating system dto
     * @param os The operating system from the database
     */
    osToDto(os) {
        const osDto = new __1.OperatingSystemDto();
        if (os) {
            osDto.distribution = os.distribution;
            osDto.release = os.release;
            osDto.version = os.version;
        }
        return osDto;
    }
    /**
     * Transforms an imageAvailability object from the database
     * to a dto
     * @param imageAvailability The imageAvailability which should be transformed to a dto
     */
    imageAvailabilityToDto(imageAvailability) {
        // rIA shortname for remoteImageAvailability
        const rIADto = new __1.RemoteImageAvailabilityDto();
        rIADto.cloneable = !imageAvailability.remote.readonly && !imageAvailability.available;
        rIADto.available = imageAvailability.available;
        rIADto.name = imageAvailability.remote.name;
        rIADto.id = imageAvailability.remote.id;
        return rIADto;
    }
    /**
     * Maps the given database image with the ImageDetailDto and returns
     * the instance
     * @param image The database image, which should be mapped with a ImageDetailDto
     */
    entityToDto(image) {
        const imageDetail = new __1.ImageDetailDto();
        imageDetail.id = image.id;
        imageDetail.fingerprint = image.fingerprint.substring(0, 12);
        imageDetail.fullFingerprint = image.fingerprint;
        imageDetail.uploadedAt = image.uploadedAt;
        imageDetail.description = image.description;
        imageDetail.aliases = image.aliases.map(alias => this.aliasToDto(alias));
        if (image.osArchitecture) {
            imageDetail.architecture = this.architectureToDto(image.osArchitecture.architecture);
            imageDetail.operatingSystem = this.osToDto(image.osArchitecture.operatingSystem);
        }
        imageDetail.autoUpdate = image.autoUpdate;
        imageDetail.createdAt = image.createdAt;
        imageDetail.expiresAt = image.expiresAt;
        imageDetail.size = image.size;
        imageDetail.public = image.public;
        imageDetail.remotes = image.imageAvailabilities
            .map(imageAvailability => this.imageAvailabilityToDto(imageAvailability));
        imageDetail.cloneable =
            imageDetail.remotes.some(remote => remote.cloneable) &&
                imageDetail.remotes.some(remote => remote.available);
        return imageDetail;
    }
};
ImageDetailFactory = __decorate([
    common_2.Injectable()
], ImageDetailFactory);
exports.ImageDetailFactory = ImageDetailFactory;
//# sourceMappingURL=image-detail.factory.js.map