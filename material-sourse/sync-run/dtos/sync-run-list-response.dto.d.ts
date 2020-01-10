import { PaginationResponseDto } from '@lxdhub/interfaces';
import { SyncState } from '@lxdhub/db';
export declare type SyncRunListResponseDto = PaginationResponseDto<SyncRunItemDto[]>;
/**
 * The data transfer object, which represents a "not detailed"
 * sync run item. This class is used for larger sync run lists, which do not require
 * any detailed data of a sync run.
 */
export declare class SyncRunItemDto {
    id: number;
    state: SyncState;
    created: number;
    started?: number;
    ended?: number;
    error?: string;
}
