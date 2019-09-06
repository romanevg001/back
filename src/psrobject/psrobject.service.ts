import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { PsrobjectEntity } from './psrobject.entity';
import { PsrobjectRepository } from './psrobject.repository';
import { PsrobjectDTO, PsrobjectRQ } from './psrobject.dto';
import { DepartmentEntity} from '../dictionaries/departments/department.entity';
import { RegionEntity} from '../dictionaries/regions/region.entity';
import { TagEntity} from '../tag/tag.entity';
import { TypeEntity} from '../type/type.entity';
import { FilterPsrobjectDTO} from './filter-psrobject.dto';
import { UserEntity } from 'src/user/user.entity';


@Injectable()
export class PsrobjectService {
  constructor(
    @InjectRepository(PsrobjectEntity)
    private psrobjectRepository: Repository<PsrobjectEntity>,
    @InjectRepository(DepartmentEntity)
    private departmentRepository: Repository<DepartmentEntity>,
    @InjectRepository(RegionEntity)
    private regionRepository: Repository<RegionEntity>,
    @InjectRepository(TagEntity)
    private tagRepository: Repository<TagEntity>,
    @InjectRepository(TypeEntity)
    private typeRepository: Repository<TypeEntity>,

    @InjectRepository(PsrobjectRepository)
    private psrobjectRepository2: PsrobjectRepository,

  ) {
  }

  async getPsrobject(filterPsrobjectDTO: FilterPsrobjectDTO, user: UserEntity): Promise<PsrobjectEntity[]> {
    return this.psrobjectRepository2.getPsrobject(filterPsrobjectDTO, user);
  }

  async getList(page: number = 1) {
    const list = await this.psrobjectRepository.find({
      relations: ['department', 'region', 'tags', 'type'],
      take: 25,
      skip: 25 * (page - 1 ),
    });
    return list;
  }

  async read(id: string) {
    const item = await this.psrobjectRepository.findOne({where: {id}, relations: ['department', 'region', 'tags', 'type']});
    return item;
  }

  async update(id: string, data: Partial<PsrobjectRQ>): Promise<PsrobjectDTO> {
    let updatedData: any = data;
    let psrobject = await this.psrobjectRepository.findOne({where: {id}, relations: ['department', 'region', 'tags', 'type']});
    if (data.departmentId) {
      const department = await this.departmentRepository.findOne({where: {id: data.departmentId}});
      updatedData = {...updatedData, department};
      delete updatedData.departmentId;
    }
    if (data.regionId) {
      const region = await this.regionRepository.findOne({where: {id: data.regionId}});
      updatedData = {...updatedData, region};
      delete updatedData.regionId;
    }
    if (data.tagsId) {
      const tags = await this.tagRepository.find({where: data.tagsId.map(el => ({id: el}))});
      updatedData = {...updatedData, tags};
      delete updatedData.tagsId;
    }
    if (data.typeId) {
      const type = await this.typeRepository.findOne({where: {id: data.typeId}});
      updatedData = {...updatedData, type};
      delete updatedData.typeId;
    }

    await this.psrobjectRepository.update(id, updatedData);

    psrobject = await this.psrobjectRepository.findOne({where: {id}, relations: ['department', 'region', 'tags', 'type']});
    return psrobject;
  }

  async create(data: PsrobjectRQ): Promise<PsrobjectDTO> {
   // const user = await this.userRepository.findOne({where: {id: userId}});
    const department = await this.departmentRepository.findOne({where: {id: data.departmentId}});
    const region = await this.regionRepository.findOne({where: {id: data.regionId}});
    const tags = await this.tagRepository.find({where: data.tagsId.map(el => ({id: el}))});
    const type = await this.typeRepository.findOne({where: {id: data.typeId}});

    const psrobject = await this.psrobjectRepository.create({...data, department, region, tags, type});
    await this.psrobjectRepository.save(psrobject);
    return psrobject;
  }

  async destroy(id: string): Promise<PsrobjectDTO> {
     const psrobject = await this.psrobjectRepository.findOne({where: {id}});
     await this.psrobjectRepository.remove(psrobject);
     return psrobject;
  }

}
