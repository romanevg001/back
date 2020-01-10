import { PaginationOptionsDto } from '../../common';
/**
 * This interface represents
 * options for request an image list.
 */
export declare class ImageListOptions extends PaginationOptionsDto {
    /**
     * The name of the remote, from which the images should
     * be from.
     */
    readonly remote: string;
    /**
     * The query-string which filters the image.
     * Search for image OS name or Arch Name
     */
    readonly query?: string;
}
