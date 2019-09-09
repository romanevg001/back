import { Repository } from 'typeorm';
import { PsrobjectEntity } from '../psrobject/psrobject.entity';
import { BoxEntity } from '../box/box.entity';
import { SearchDTO } from './search.dto';
export declare class SearchService {
    private psrobjectRepository;
    private boxRepository;
    constructor(psrobjectRepository: Repository<PsrobjectEntity>, boxRepository: Repository<BoxEntity>);
    filter(data: Partial<SearchDTO>): Promise<PsrobjectEntity[]>;
    find(data: Partial<SearchDTO>): Promise<{
        psrobjects: any;
        boxes: any;
    }>;
    searchInPsrObjects(data: Partial<SearchDTO>): Promise<PsrobjectEntity[]>;
    searchInBoxSolutions(data: Partial<SearchDTO>): Promise<BoxEntity[]>;
}
