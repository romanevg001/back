import { Repository } from 'typeorm';
import { SyncRun } from '@lxdhub/db';
import { PaginationOptionsDto } from '../common';
/**
 * This repository represents the interface between the appliaction
 * repository entity and the database.
 */
export declare class SyncRunRepository extends Repository<SyncRun> {
    /**
     * Paginate through syncronization runs
     * @param pagination The pagination options
     */
    paginate(pagination: PaginationOptionsDto): Promise<[SyncRun[], number]>;
}
