import { DepartmentEntity } from '../dictionaries/departments/department.entity';
import { RegionEntity } from '../dictionaries/regions/region.entity';
import { TagEntity } from '../tag/tag.entity';
import { TypeEntity } from '../type/type.entity';
import { BoxEntity } from '../box/box.entity';
export declare class PsrobjectEntity {
    id: string;
    created: Date;
    updated: Date;
    title: string;
    image: string;
    type: TypeEntity;
    region: RegionEntity;
    choiceJustification: string;
    tags: TagEntity[];
    hidden: boolean;
    department: DepartmentEntity;
    box: BoxEntity;
}
