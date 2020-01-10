import { CloneImageDto, CloneImageResponseDto, ImageDetailDto, ImageListOptions, ImageListItemResponse } from '.';
import { ResponseDto } from '@lxdhub/interfaces';
import { ImageService } from './image.service';
/**
 * The Image Controller, which is the API
 * interface for Image-Operations.
 */
export declare class ImageController {
    private readonly imageService;
    constructor(imageService: ImageService);
    /**
     * Returns images, limited by the given pagination options and
     * filters it by the given remoteId.
     * If remoteId is not given, it takes the first remote.
     * @param options The options to paginate through the requested data
     */
    findByRemote(options: ImageListOptions): Promise<ImageListItemResponse>;
    /**
     * Returns a detail image with the given id
     * @param {number} fingerprint The fingerprint of the image
     */
    findOne(fingerprint: string): Promise<ResponseDto<ImageDetailDto>>;
    /**
     * Clones the image with the given id
     * @param {number} id The id of the image
     */
    clone(id: number, cloneImageDto: CloneImageDto): Promise<ResponseDto<CloneImageResponseDto>>;
}
