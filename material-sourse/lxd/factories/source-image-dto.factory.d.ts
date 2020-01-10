import { Image, Remote } from '@lxdhub/db';
import { SourceImageDto } from '../dto';
/**
 * Transforms the image and remotes from the database
 * to a SourceImageDto
 */
export declare class SourceImageFactory {
    /**
     * Maps the alias from the database with the AliasDto
     * @param alias The alias from the database
     */
    private aliasToDto;
    /**
     * Transforms the image and the sourceRemote into
     * a SourceDto
     * @param image The image from the database
     * @param sourceRemote The source remote from the database
     */
    private imageToSourceDto;
    /**
     * Transforms the given image to a Source Image Dto
     * @param image The image from the database
     * @param sourceRemote The source remote from the database
     * @param desinationRemote The destination remote from the database
     */
    entityToDto(image: Image, sourceRemote: Remote, desinationRemote: Remote): SourceImageDto;
}
