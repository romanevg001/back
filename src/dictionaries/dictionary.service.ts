import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { RegionEntity } from './regions/region.entity';
import { RegionDTO } from './regions/region.dto';

@Injectable()
export class DictionaryService {
  constructor(
    @InjectRepository(RegionEntity)
    private regionRepository: Repository<RegionEntity>,
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

}
