import { Factory } from '@lxdhub/common';
import { SyncRun } from '@lxdhub/db';
import { SyncRunItemDto } from '../';
export declare class SyncRunListResponseFactory extends Factory<SyncRunItemDto> {
    entityToDto(syncRun: SyncRun): SyncRunItemDto;
}
