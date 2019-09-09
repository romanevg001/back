import { PsrobjectService } from './psrobject.service';
import { TagService } from 'src/tag/tag.service';
import { TypeService } from 'src/type/type.service';
import { DictionaryService } from 'src/dictionaries/dictionary.service';
export declare class PsrobjectResolver {
    private psrobjectService;
    private tagService;
    private typeService;
    private dictionaryService;
    constructor(psrobjectService: PsrobjectService, tagService: TagService, typeService: TypeService, dictionaryService: DictionaryService);
    psrobjects(page: number): Promise<import("./psrobject.entity").PsrobjectEntity[]>;
    psrobject(id: string): Promise<import("./psrobject.entity").PsrobjectEntity>;
    tags(psrobject: any): Promise<import("../tag/tag.entity").TagEntity[]>;
    type(psrobject: any): Promise<import("../type/type.entity").TypeEntity>;
    department(psrobject: any): Promise<import("../dictionaries/departments/department.entity").DepartmentEntity>;
    region(psrobject: any): Promise<import("../dictionaries/regions/region.entity").RegionEntity>;
}
