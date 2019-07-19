import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { PsrobjectEntity } from './psrobject.entity';
import { PsrobjectDTO, PsrobjectRS, PsrobjectRQ } from './psrobject.dto';
import { DepartmentEntity} from '../dictionaries/departments/department.entity';

@Injectable()
export class PsrobjectService {
  constructor(
    @InjectRepository(PsrobjectEntity)
    private psrobjectRepository: Repository<PsrobjectEntity>,
    @InjectRepository(DepartmentEntity)
    private departmentRepository: Repository<DepartmentEntity>,
  ) {
  }

  async getList(page: number = 1) {
    const list = await this.psrobjectRepository.find({
      relations: ['department'],
      take: 25,
      skip: 25 * (page - 1 ),
    });
    return list;
  }

  async read(id: string) {
    const item = await this.psrobjectRepository.findOne({where: {id}, relations: ['department']});
    return item;
  }

  async update(id: string, data: PsrobjectRQ): Promise<PsrobjectDTO> {
    let psrobject = await this.psrobjectRepository.findOne({where: {id}, relations: ['department']});
    const department = await this.departmentRepository.findOne({where: {id: data.departmentId}});

    console.log('=============psrobject============', psrobject);
    if (!psrobject || !department) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.psrobjectRepository.update(id, {...data, department});
    psrobject = await this.psrobjectRepository.findOne({where: {id}, relations: ['department']});
    return psrobject;
  }

  async create(data: PsrobjectRQ): Promise<PsrobjectDTO> {
   // const user = await this.userRepository.findOne({where: {id: userId}});
    const department = await this.departmentRepository.findOne({where: {id: data.departmentId}});
    const psrobject = await this.psrobjectRepository.create({...data, department});
    await this.psrobjectRepository.save(psrobject);
    return psrobject; // this.toResponseObject(idea); //{...idea, author: idea.author.toResponseObject(false)};
  }

}
