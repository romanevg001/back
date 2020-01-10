"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const dto_1 = require("../dto");
/**
 * Transforms the image and remotes from the database
 * to a SourceImageDto
 */
let SourceImageFactory = class SourceImageFactory {
    /**
     * Maps the alias from the database with the AliasDto
     * @param alias The alias from the database
     */
    aliasToDto(alias) {
        const aliasDto = new dto_1.AliasDto();
        if (alias) {
            aliasDto.name = alias.name;
            aliasDto.description = alias.description;
        }
        return aliasDto;
    }
    /**
     * Transforms the image and the sourceRemote into
     * a SourceDto
     * @param image The image from the database
     * @param sourceRemote The source remote from the database
     */
    imageToSourceDto(image, sourceRemote) {
        const dto = new dto_1.SourceDto();
        dto.server = sourceRemote.serverUrl;
        dto.protocol = 'lxd';
        dto.fingerprint = image.fingerprint;
        return dto;
    }
    /**
     * Transforms the given image to a Source Image Dto
     * @param image The image from the database
     * @param sourceRemote The source remote from the database
     * @param desinationRemote The destination remote from the database
     */
    entityToDto(image, sourceRemote, desinationRemote) {
        const dto = new dto_1.SourceImageDto();
        dto.public = desinationRemote.public;
        dto.aliases = image.aliases.map(alias => this.aliasToDto(alias));
        dto.source = this.imageToSourceDto(image, sourceRemote);
        return dto;
    }
};
SourceImageFactory = __decorate([
    common_1.Injectable()
], SourceImageFactory);
exports.SourceImageFactory = SourceImageFactory;
//# sourceMappingURL=source-image-dto.factory.js.map