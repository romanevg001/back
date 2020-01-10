import { ImageAvailability } from '@lxdhub/db';
import { Connection, Repository } from 'typeorm';
/**
 * The ImageAvailabilityRepository represents the
 * interface between the appliaction image availability entity
 * and the database.
 */
export declare class ImageAvailabilityRepository extends Repository<ImageAvailability> {
    /**
     * Returns the image availability by the remote and image id
     * @param remoteId The remote id
     * @param imageId The image id
     */
    getImageByRemoteAndImage(remoteId: number, imageId: number): Promise<ImageAvailability>;
}
/**
 * This is a workaround, until custom TypeOrm
 * Repositories get supported by NestJS/TypeOrm.
 * See Github nestjs/typeorm#14
 *
 * https://github.com/nestjs/typeorm/issues/14
 */
export declare const ImageAvailabilityRepositoryProvider: {
    provide: string;
    useFactory: (connection: Connection) => ImageAvailabilityRepository;
    inject: (typeof Connection)[];
};
