import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IdeaEntity } from '../idea/idea.entity';
export declare class GetByIdPipe implements PipeTransform<any> {
    private ideaRepository;
    constructor(ideaRepository: Repository<IdeaEntity>);
    transform(id: any, metadata: ArgumentMetadata): Promise<IdeaEntity>;
}
