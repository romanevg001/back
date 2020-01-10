import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import { CloneStatusDto, ImageDetailDto } from './';
import { ResponseDto } from '../common';
import { WsResponse } from '@nestjs/websockets';
import { ImageAvailabilityService } from '../image-availability/image-availability.service';
import { LogService } from '../log/log.service';
import { LXDService } from '../lxd/lxd.service';
import { ImageRepository } from './image.repository';
import { ImageService } from './image.service';
import { RemoteService } from '../remote';
/**
 * Gateway for image related websocket messages
 */
export declare class ImageGateway {
    private lxdService;
    private remoteService;
    private imageService;
    private imageAvailabilityService;
    private imageRepository;
    logger: LogService;
    /**
     * Initializes the component
     * @param lxdService The LXDService
     * @param remoteRepository The Remote Repository
     */
    constructor(lxdService: LXDService, remoteService: RemoteService, imageService: ImageService, imageAvailabilityService: ImageAvailabilityService, imageRepository: ImageRepository);
    /**
     * Returns the clone status
     * @param data The data sent from the user
     */
    getCloneStatus(_: any, data: CloneStatusDto): Promise<WsResponse<ResponseDto<ImageDetailDto>>>;
}
