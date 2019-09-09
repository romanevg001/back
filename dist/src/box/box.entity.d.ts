import { PsrobjectEntity } from '../psrobject/psrobject.entity';
export declare class BoxEntity {
    id: string;
    created: Date;
    updated: Date;
    name: string;
    views: number;
    psrObjects: PsrobjectEntity[];
}
