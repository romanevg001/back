"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The alias dto for a source image
 */
class AliasDto {
}
exports.AliasDto = AliasDto;
/**
 * The source information of an image / remote
 */
class SourceDto {
    constructor() {
        /**
         * The type of the source.
         * Default is image
         */
        this.type = 'image';
        /**
         * The mode of the clone.
         * Only pull is supported by LXC Rest API for now
         * pull is default
         */
        this.mode = 'pull';
        /**
         * The protocol of the clone
         * Either lxd or simplestreams
         * Default is lxd
         */
        this.protocol = 'lxd';
    }
}
exports.SourceDto = SourceDto;
/**
 * The source image properties
 */
class SourceImagePropertiesDto {
}
exports.SourceImagePropertiesDto = SourceImagePropertiesDto;
/**
 * The source image as defined in
 * https://github.com/lxc/lxd/blob/master/doc/rest-api.md#post-7
 */
class SourceImageDto {
}
exports.SourceImageDto = SourceImageDto;
//# sourceMappingURL=source-image.dto.js.map