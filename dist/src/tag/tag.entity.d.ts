import { PsrobjectEntity } from '../psrobject/psrobject.entity';
export declare class TagEntity {
    id: string;
    created: Date;
    updated: Date;
    name: string;
    psrObjects: PsrobjectEntity[];
}
