import { PsrobjectService } from './psrobject.service';
import { PsrobjectRQ } from './psrobject.dto';
import { FilterPsrobjectDTO } from './filter-psrobject.dto';
import { PsrobjectEntity } from './psrobject.entity';
import { UserEntity } from 'src/user/user.entity';
export declare class PsrobjectController {
    private psrobjectService;
    private logger;
    constructor(psrobjectService: PsrobjectService);
    getPsrobject(filterPsrobjectDTO: FilterPsrobjectDTO, user: UserEntity): Promise<PsrobjectEntity[]>;
    getList(page: number): Promise<PsrobjectEntity[]>;
    getOne(user: string): Promise<PsrobjectEntity>;
    create(data: PsrobjectRQ): Promise<import("./psrobject.dto").PsrobjectDTO>;
    update(id: string, data: Partial<PsrobjectRQ>): Promise<import("./psrobject.dto").PsrobjectDTO>;
    destroy(id: string): Promise<import("./psrobject.dto").PsrobjectDTO>;
}
