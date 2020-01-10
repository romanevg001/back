import { Factory } from '@lxdhub/common';
import { Image } from '@lxdhub/db';
import { ImageListItemDto } from '..';
/**
 * Factory which procudes ImageListItemDtos
 */
export declare class ImageListItemFactory extends Factory<ImageListItemDto> {
    /**
     * Maps the given database image with the ImageListDto and returns
     * the instance
     * @param image The database image, which should be mapped with a ImageListItemDto
     */
    entityToDto(image: Image): ImageListItemDto;
}
