import { PaginationOptionsDto, PaginationResponseDto } from '../common';
import { SyncRunRepository } from './sync-run.repository';
import { SyncRunListResponseFactory } from './factories';
import { SyncRunItemDto } from './dtos';
export declare class SyncRunService {
    private readonly syncRunRepository;
    private readonly syncRunFactory;
    constructor(syncRunRepository: SyncRunRepository, syncRunFactory: SyncRunListResponseFactory);
    paginate(pagination: PaginationOptionsDto): Promise<PaginationResponseDto<SyncRunItemDto[]>>;
}
