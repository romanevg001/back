import { Repository } from 'typeorm';
import { FilterPsrobjectDTO } from './filter-psrobject.dto';
import { PsrobjectEntity } from './psrobject.entity';
import { UserEntity } from 'src/user/user.entity';
export declare class PsrobjectRepository extends Repository<PsrobjectEntity> {
    private logger;
    getPsrobject(filterPsrobjectDTO: FilterPsrobjectDTO, user: UserEntity): Promise<PsrobjectEntity[]>;
}
