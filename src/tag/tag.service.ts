import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { TagEntity } from './tag.entity';
import { TagDTO } from './tag.dto';

import { PsrobjectEntity } from '../psrobject/psrobject.entity';


@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private tagRepository: Repository<TagEntity>,
    @InjectRepository(PsrobjectEntity)
    private psrobjectRepository: Repository<PsrobjectEntity>,
  ) {
  }

  async readList(page: number = 1) {
    const tages = await this.tagRepository.find({
      relations: ['psrObjects'],
      take: 25,
      skip: 25 * (page - 1 ),
    });
    return tages;
  }

  async read(id: string) {
    const tag = await this.tagRepository.findOne({where: {id}, relations: ['psrObjects']});
    return tag;
  }

  async getTagsByPsrObject(PsrObjectId: string) {
    const tag = await this.psrobjectRepository.findOne({where: {PsrObjectId}, relations: ['tags']});
    console.log('tag ====>', tag);
    return tag.tags;
  }

  async create(data: TagDTO) {
     await this.tagRepository.save(data);
     return data;
  }

  async update(data: TagDTO) {
    await this.tagRepository.save(data);
    return data;
 }

  async destroy(id: string) {
    const tag = await this.tagRepository.findOne({where: {id}});
    await this.tagRepository.remove(tag);
    return tag;
 }

}
