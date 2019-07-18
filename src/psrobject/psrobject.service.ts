import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { PsrobjectEntity } from './psrobject.entity';
import { PsrobjectDTO } from './psrobject.dto';

@Injectable()
export class PsrobjectService {
  constructor(
    @InjectRepository(PsrobjectEntity)
    private psrobjectRepository: Repository<PsrobjectEntity>,
  ) {
  }

  async getList(page: number = 1) {
    const list = await this.psrobjectRepository.find({
      take: 25,
      skip: 25 * (page - 1 ),
    });
    return list;
  }

  async getOne(id: string) {
    const item = await this.psrobjectRepository.findOne({where: {id}});
    return item;
  }

  async setOne(data: PsrobjectDTO) {
     await this.psrobjectRepository.save(data);
     return data;
  }

}
