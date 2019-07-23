import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { TypeEntity } from './type.entity';
import { TypeDTO } from './type.dto';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(TypeEntity)
    private typeRepository: Repository<TypeEntity>,
  ) {
  }

  async getTypes(page: number = 1) {
    const types = await this.typeRepository.find({
      relations: ['psrObjects'],
      take: 25,
      skip: 25 * (page - 1 ),
    });
    return types;
  }

  async read(id: string) {
    const type = await this.typeRepository.findOne({where: {id}, relations: ['psrObjects']});
    return type;
  }

  async create(data: TypeDTO) {
     await this.typeRepository.save(data);
     return data;
  }

  async destroy(id: string) {
    const type = await this.typeRepository.findOne({where: {id}});
    await this.typeRepository.remove(type);
    return type;
 }

}
