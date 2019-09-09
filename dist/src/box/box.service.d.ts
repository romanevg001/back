import { Repository } from 'typeorm';
import { BoxEntity } from './box.entity';
import { BoxDTO, BoxRQ } from './box.dto';
import { PsrobjectEntity } from '../psrobject/psrobject.entity';
export declare class BoxService {
    private boxRepository;
    private psrobjectRepository;
    constructor(boxRepository: Repository<BoxEntity>, psrobjectRepository: Repository<PsrobjectEntity>);
    readList(page?: number): Promise<BoxEntity[]>;
    read(id: string): Promise<BoxEntity>;
    create(data: BoxRQ): Promise<BoxDTO>;
}
