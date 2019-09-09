import { Repository } from 'typeorm';
import { RegionEntity } from './regions/region.entity';
import { RegionDTO } from './regions/region.dto';
import { DepartmentEntity } from './departments/department.entity';
import { DepartmentDTO } from './departments/department.dto';
import { PsrobjectEntity } from '../psrobject/psrobject.entity';
export declare class DictionaryService {
    private regionRepository;
    private departmentRepository;
    private psrobjectRepository;
    constructor(regionRepository: Repository<RegionEntity>, departmentRepository: Repository<DepartmentEntity>, psrobjectRepository: Repository<PsrobjectEntity>);
    readRegions(): Promise<RegionEntity[]>;
    createRegion(data: RegionDTO): Promise<RegionDTO>;
    destroyRegion(id: string): Promise<RegionEntity>;
    getRegionByPsrObject(PsrObjectId: string): Promise<RegionEntity>;
    readDepartments(): Promise<DepartmentEntity[]>;
    createDepartment(data: DepartmentDTO): Promise<DepartmentDTO>;
    destroyDepartment(id: string): Promise<DepartmentEntity>;
    getDepartmentByPsrObject(PsrObjectId: string): Promise<DepartmentEntity>;
}
