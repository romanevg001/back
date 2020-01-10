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
 * Factory which procudes ImageListItemDtos
 */
let ImageListItemFactory = class ImageListItemFactory extends common_1.Factory {
    /**
     * Maps the given database image with the ImageListDto and returns
     * the instance
     * @param image The database image, which should be mapped with a ImageListItemDto
     */
    entityToDto(image) {
        const imageListItem = new __1.ImageListItemDto();
        imageListItem.id = image.id;
        imageListItem.fingerprint = image.fingerprint.substring(0, 12);
        imageListItem.uploadedAt = image.uploadedAt;
        imageListItem.description = image.description;
        return imageListItem;
    }
};
ImageListItemFactory = __decorate([
    common_2.Injectable()
], ImageListItemFactory);
exports.ImageListItemFactory = ImageListItemFactory;
//# sourceMappingURL=image-list-item.factory.js.map