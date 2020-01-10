import { Image } from '@lxdhub/db';
import { Repository } from 'typeorm';
import { PaginationOptionsDto } from '../common';
import { ImageSearchLiteral } from './interfaces';
/**
 * The image repository represents the
 * interface between the appliaction image entity
 * and the database.
 */
export declare class ImageRepository extends Repository<Image> {
    /**
     * Finds all images of an remote, filters them by the given
     * query attributes and applies the given pagination
     * options
     * @param remoteId The id of the remote
     * @param queryAttributes Array of search parameters, which should be filtered with
     * Operating Name or Architecture Name of an image
     * @param pagination The pagination options
     */
    findByRemote(remoteId: number, pagination: PaginationOptionsDto, search?: ImageSearchLiteral): Promise<[Image[], number]>;
    /**
     * Finds the image with the given id
     * @param pagination The pagination options
     */
    findOneItem(id: number): Promise<Image>;
    findOneByFingerprint(fingerprint: string): Promise<Image>;
}
