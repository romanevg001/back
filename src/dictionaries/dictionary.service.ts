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

  async getRegions() {
    const regions = await this.regionRepository.find();
    return regions;
  }

  async setRegions(data: RegionDTO) {
     await this.regionRepository.save(data);
     return data;
  }

  async getDepartment() {
    const data = await this.departmentRepository.find();
    console.log('getDepartment====== ', data);
    return data;
  }

  async setDepartment(data: DepartmentDTO) {
     await this.departmentRepository.save(data);
     return data;
  }

}
