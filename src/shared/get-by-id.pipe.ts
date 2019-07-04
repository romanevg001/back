
import { Injectable, HttpException, HttpStatus, ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IdeaEntity } from '../idea/idea.entity';

@Injectable()
export class GetByIdPipe implements PipeTransform<any> {
  constructor(
    @InjectRepository(IdeaEntity)
    private ideaRepository: Repository<IdeaEntity>,
  ) {
  }
  async transform(id: any, metadata: ArgumentMetadata) {
    const idea = await this.ideaRepository.findOne({where: {id}});
    if (!idea) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return idea;
  }

}
