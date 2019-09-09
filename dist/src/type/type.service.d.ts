import { Repository } from 'typeorm';
import { TypeEntity } from './type.entity';
import { TypeDTO } from './type.dto';
import { PsrobjectEntity } from '../psrobject/psrobject.entity';
export declare class TypeService {
    private typeRepository;
    private psrobjectRepository;
    constructor(typeRepository: Repository<TypeEntity>, psrobjectRepository: Repository<PsrobjectEntity>);
    getTypes(page?: number): Promise<TypeEntity[]>;
    read(id: string): Promise<TypeEntity>;
    create(data: TypeDTO): Promise<TypeDTO>;
    destroy(id: string): Promise<TypeEntity>;
    getTypesByPsrObject(PsrObjectId: string): Promise<TypeEntity>;
}
