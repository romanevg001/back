import { DictionaryService } from './dictionary.service';
import { RegionDTO } from './regions/region.dto';
import { DepartmentDTO } from './departments/department.dto';
export declare class DictionaryController {
    private dictionaryService;
    constructor(dictionaryService: DictionaryService);
    readRegions(): Promise<import("./regions/region.entity").RegionEntity[]>;
    createRegion(data: RegionDTO): Promise<RegionDTO>;
    deleteRegion(id: string): Promise<import("./regions/region.entity").RegionEntity>;
    readDepartments(): Promise<import("./departments/department.entity").DepartmentEntity[]>;
    createDepartment(data: DepartmentDTO): Promise<DepartmentDTO>;
    deleteDepartment(id: string): Promise<import("./departments/department.entity").DepartmentEntity>;
}
