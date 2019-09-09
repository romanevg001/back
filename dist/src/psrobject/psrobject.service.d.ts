import { Repository } from 'typeorm';
import { PsrobjectEntity } from './psrobject.entity';
import { PsrobjectRepository } from './psrobject.repository';
import { PsrobjectDTO, PsrobjectRQ } from './psrobject.dto';
import { DepartmentEntity } from '../dictionaries/departments/department.entity';
import { RegionEntity } from '../dictionaries/regions/region.entity';
import { TagEntity } from '../tag/tag.entity';
import { TypeEntity } from '../type/type.entity';
import { FilterPsrobjectDTO } from './filter-psrobject.dto';
import { UserEntity } from 'src/user/user.entity';
export declare class PsrobjectService {
    private psrobjectRepository;
    private departmentRepository;
    private regionRepository;
    private tagRepository;
    private typeRepository;
    private psrobjectRepository2;
    constructor(psrobjectRepository: Repository<PsrobjectEntity>, departmentRepository: Repository<DepartmentEntity>, regionRepository: Repository<RegionEntity>, tagRepository: Repository<TagEntity>, typeRepository: Repository<TypeEntity>, psrobjectRepository2: PsrobjectRepository);
    getPsrobject(filterPsrobjectDTO: FilterPsrobjectDTO, user: UserEntity): Promise<PsrobjectEntity[]>;
    getList(page?: number): Promise<PsrobjectEntity[]>;
    read(id: string): Promise<PsrobjectEntity>;
    update(id: string, data: Partial<PsrobjectRQ>): Promise<PsrobjectDTO>;
    create(data: PsrobjectRQ): Promise<PsrobjectDTO>;
    destroy(id: string): Promise<PsrobjectDTO>;
}
