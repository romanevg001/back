import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { RegionEntity } from './regions/region.entity';
import { RegionDTO } from './regions/region.dto';

import { DepartmentEntity } from './departments/department.entity';
import { DepartmentDTO } from './departments/department.dto';

import { PsrobjectEntity } from '../psrobject/psrobject.entity';


@Injectable()
export class DictionaryService {
  constructor(
    @InjectRepository(RegionEntity)
    private regionRepository: Repository<RegionEntity>,
    @InjectRepository(DepartmentEntity)
    private departmentRepository: Repository<DepartmentEntity>,
    @InjectRepository(PsrobjectEntity)
    private psrobjectRepository: Repository<PsrobjectEntity>,
  ) {
  }

  async readRegions() {
    const regions = await this.regionRepository.find({relations: ['psrObjects']});
    return regions;
  }

  async createRegion(data: RegionDTO) {
     await this.regionRepository.save(data);
     return data;
  }

  async destroyRegion(id: string) {
    const region = await this.regionRepository.findOne(id);
    await this.regionRepository.remove(region);
    return region;
 }

  async readDepartments() {
    const data = await this.departmentRepository.find({relations: ['psrObjects']});
    return data;
  }

  async createDepartment(data: DepartmentDTO) {
     await this.departmentRepository.save(data);
     return data;
  }

  async destroyDepartment(id: string) {
    const department = await this.departmentRepository.findOne(id);
    await this.departmentRepository.remove(department);
    return department;
 }

 async getDepartmentByPsrObject(PsrObjectId: string) {
  const psrobject = await this.psrobjectRepository.findOne({where: {id: PsrObjectId}, relations: ['department']});
  return psrobject.department;
}

}
