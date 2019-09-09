import { Repository } from 'typeorm';
import { TagEntity } from './tag.entity';
import { TagDTO } from './tag.dto';
import { PsrobjectEntity } from '../psrobject/psrobject.entity';
export declare class TagService {
    private tagRepository;
    private psrobjectRepository;
    constructor(tagRepository: Repository<TagEntity>, psrobjectRepository: Repository<PsrobjectEntity>);
    readList(page?: number): Promise<TagEntity[]>;
    read(tagId: string): Promise<TagEntity>;
    getTagsByPsrObject(PsrObjectId: string): Promise<TagEntity[]>;
    create(data: TagDTO): Promise<TagDTO>;
    update(data: TagDTO): Promise<TagDTO>;
    destroy(id: string): Promise<TagEntity>;
}
