import { PaginationOptionsDto } from '../common';
import { SyncRunService } from './sync-run.service';
import { SyncRunListResponseDto } from './dtos';
export declare class SyncRunController {
    private readonly syncRunService;
    constructor(syncRunService: SyncRunService);
    findAll(paginate: PaginationOptionsDto): Promise<SyncRunListResponseDto>;
}
