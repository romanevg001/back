import { CloneImageDto, CloneImageResponseDto, ImageDetailDto, ImageListItemDto } from '.';
import { PaginationOptionsDto, PaginationResponseDto, ResponseDto } from '../common';
import { LXDService } from '../lxd/lxd.service';
import { SearchDictionary, SearchService } from '../search';
import { ImageDetailFactory, ImageListItemFactory } from './factories';
import { ImageRepository } from './image.repository';
import { RemoteService } from '../remote';
/**
 * Interface between the Database and API for
 * Image operations.
 */
export declare class ImageService {
    private readonly imageRepository;
    private readonly imageListItemFactory;
    private readonly imageDetailFactory;
    private readonly searchService;
    private readonly remoteService;
    private readonly imageSearchDictionary;
    private readonly lxdService;
    /**
     * Initialized the Image Service.
     * @param imageRepository The database interface for image operations
     * @param imageListItemFactory The api-image-interface
     * @param imageDetaiLFactory The api-image-detail-interface
     */
    constructor(imageRepository: ImageRepository, imageListItemFactory: ImageListItemFactory, imageDetailFactory: ImageDetailFactory, searchService: SearchService, remoteService: RemoteService, imageSearchDictionary: SearchDictionary[], lxdService: LXDService);
    /**
     * Returns images, limited by the given pagination options, filtered
     * by the query parameter and transforms the database images into data-transfer-objects
     * @param remoteName The name of the remote
     * @param query The The query-string which filters the image. Search for image os name or arch Name
     * @param pagination The options to paginate through the request data
     */
    findByRemote(remoteName: string, pagination: PaginationOptionsDto, query?: string): Promise<PaginationResponseDto<ImageListItemDto[]>>;
    /**
     * Finds one image and returns detailed image information
     * in a DTO.
     * @param fingerprint The fingerprint of the image
     * @throws {Error} Will throw an error if the image is not found
     */
    findOne(fingerprint: string): Promise<ResponseDto<ImageDetailDto>>;
    /**
     * Clones an image to a specific remote
     * @param imageId The id of the image, which should get cloned
     * @param cloneImageDto The dto, which contains the remote information
     */
    cloneImage(imageId: number, cloneImageDto: CloneImageDto): Promise<ResponseDto<CloneImageResponseDto>>;
}
