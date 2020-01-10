import { Image, ImageAvailability, Remote } from '@lxdhub/db';
import { ImageAvailabilityRepository } from './image-availability.repository';
/**
 * Interface between the Database and API for
 * ImageAvailability operations.
 */
export declare class ImageAvailabilityService {
    private readonly imageAvailabilityRepository;
    /**
     * Initialized the ImageAvailabilityService.
     * @param imageAvailability The image availability repository
     */
    constructor(imageAvailabilityRepository: ImageAvailabilityRepository);
    /**
     * Creates or returns the image availability entity and updates it
     * @param image The image from the database
     * @param remote The remote from the database
     * @param available If the image is on the given remote available
     */
    getOrCreate(image: Image, remote: Remote, available: boolean): Promise<ImageAvailability>;
}
