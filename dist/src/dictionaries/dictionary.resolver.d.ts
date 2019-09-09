import { DictionaryService } from './dictionary.service';
export declare class DictionaryResolver {
    private dictionaryService;
    constructor(dictionaryService: DictionaryService);
    regions(): Promise<import("./regions/region.entity").RegionEntity[]>;
    departments(): Promise<import("./departments/department.entity").DepartmentEntity[]>;
}
