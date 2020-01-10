import { Factory } from '@lxdhub/common';
import { Image } from '@lxdhub/db';
import { ImageDetailDto } from '..';
/**
 * Factory which produces ImageDetailDto
 */
export declare class ImageDetailFactory extends Factory<ImageDetailDto> {
    /**
     * Maps the alias from the database with the AliasDto
     * @param alias The alias from the database
     */
    private aliasToDto;
    /**
     * Maps the architecture from the database to a architecturedto
     * @param architecture The architecture from the database
     */
    private architectureToDto;
    /**
     * Maps the operating system from the database to a operating system dto
     * @param os The operating system from the database
     */
    private osToDto;
    /**
     * Transforms an imageAvailability object from the database
     * to a dto
     * @param imageAvailability The imageAvailability which should be transformed to a dto
     */
    private imageAvailabilityToDto;
    /**
     * Maps the given database image with the ImageDetailDto and returns
     * the instance
     * @param image The database image, which should be mapped with a ImageDetailDto
     */
    entityToDto(image: Image): ImageDetailDto;
}
