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
      take: 25,
      skip: 25 * (page - 1 ),
    });
    return boxes;
  }

  async read(id: string) {
    const box = await this.boxRepository.findOne({where: {id}});
    return box;
  }

  async create(data: BoxRQ): Promise<BoxDTO> {
    const psrObjects = await this.psrobjectRepository.find({where: data.psrObjectsIds.map(el => ({id: el}))});
    delete data.psrObjectsIds;
    console.log('====================================');
    console.log({...data, psrObjects});
    console.log('====================================');
    const box = await this.boxRepository.create({...data, psrObjects});
    console.log('====================================');
    console.log(box);
    console.log('====================================');
     await this.boxRepository.save(box);
     return box;
  }

}
