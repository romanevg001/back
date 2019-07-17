import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { BoxEntity } from './box.entity';
import { BoxDTO } from './box.dto';

@Injectable()
export class BoxService {
  constructor(
    @InjectRepository(BoxEntity)
    private boxRepository: Repository<BoxEntity>,
  ) {
  }

  async getBoxes(page: number = 1) {
    const boxes = await this.boxRepository.find({
      take: 25,
      skip: 25 * (page - 1 ),
    });
    return boxes;
  }

  async getBox(id: string) {
    const box = await this.boxRepository.findOne({where: {id}});
    return box;
  }

  async setBox(data: BoxDTO) {
     await this.boxRepository.save(data);
     return data;
  }

}
