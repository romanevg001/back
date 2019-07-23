import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { RegionEntity } from './regions/region.entity';
import { RegionDTO } from './regions/region.dto';

import { DepartmentEntity } from './departments/department.entity';
import { DepartmentDTO } from './departments/department.dto';

@Injectable()
export class DictionaryService {
  constructor(
    @InjectRepository(RegionEntity)
    private regionRepository: Repository<RegionEntity>,
    @InjectRepository(DepartmentEntity)
    private departmentRepository: Repository<DepartmentEntity>,
  ) {
  }

  async readRegions() {
    const regions = await this.regionRepository.find();
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
    const data = await this.departmentRepository.find();
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

}
