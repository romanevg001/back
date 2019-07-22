import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { TagEntity } from './tag.entity';
import { TagDTO } from './tag.dto';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private tagRepository: Repository<TagEntity>,
  ) {
  }

  async getTages(page: number = 1) {
    const tages = await this.tagRepository.find({
      relations: ['psrobjects'],
      take: 25,
      skip: 25 * (page - 1 ),
    });
    return tages;
  }

  async read(id: string) {
    const tag = await this.tagRepository.findOne({where: {id}, relations: ['psrobjects']});
    return tag;
  }

  async create(data: TagDTO) {
     await this.tagRepository.save(data);
     return data;
  }

  async destroy(id: string) {
    const tag = await this.tagRepository.findOne({where: {id}, relations: ['psrobjects']});
    await this.tagRepository.remove(tag);
    return tag;
 }

}
