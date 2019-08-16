import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { BoxEntity } from './box.entity';
import { BoxDTO, BoxRQ } from './box.dto';

import { PsrobjectEntity } from '../psrobject/psrobject.entity';

@Injectable()
export class BoxService {
  constructor(
    @InjectRepository(BoxEntity)
    private boxRepository: Repository<BoxEntity>,
    @InjectRepository(PsrobjectEntity)
    private psrobjectRepository: Repository<PsrobjectEntity>,
  ) {
  }

  async readList(page: number = 1) {
    const boxes = await this.boxRepository.find({
      relations: ['psrObjects'],
      take: 25,
      skip: 25 * (page - 1 ),
    });
    return boxes;
  }

  async read(id: string) {
    const box = await this.boxRepository.findOne({where: {id}, relations: ['psrObjects']});
    return box;
  }

  async create(data: BoxRQ): Promise<BoxDTO> {
    const psrObjects = await this.psrobjectRepository.find({where: data.psrObjectsIds.map(el => ({id: el}))});
    delete data.psrObjectsIds;
    const box = await this.boxRepository.create({...data, psrObjects});
    await this.boxRepository.save(box);
    return box;
  }

}
