import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { PsrobjectEntity } from './psrobject.entity';
import { PsrobjectDTO, PsrobjectRS, PsrobjectRQ } from './psrobject.dto';
import { DepartmentEntity} from '../dictionaries/departments/department.entity';
import { RegionEntity} from '../dictionaries/regions/region.entity';
import { TagEntity} from '../tag/tag.entity';
import { TypeEntity} from '../type/type.entity';

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
  ) {
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

  async update(id: string, data: PsrobjectRQ): Promise<PsrobjectDTO> {
    let psrobject = await this.psrobjectRepository.findOne({where: {id}, relations: ['department', 'region', 'tags', 'type']});
    const department = await this.departmentRepository.findOne({where: {id: data.departmentId}});
    const region = await this.regionRepository.findOne({where: {id: data.regionId}});
    const tagsId = data.tagsId.map(el => ({'id': el}));
    const tags = await this.tagRepository.find({where: tagsId});
    const type = await this.typeRepository.findOne({where: {id: data.typeId}});

    if (!psrobject || !department || !region || !tags || !type) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    delete data.departmentId;
    delete data.regionId;
    delete data.tagsId;
    delete data.typeId;
    await this.psrobjectRepository.update(id, {...data, department, region, tags, type});

    psrobject = await this.psrobjectRepository.findOne({where: {id}, relations: ['department', 'region', 'tags', 'type']});
    return psrobject;
  }

  async create(data: PsrobjectRQ): Promise<PsrobjectDTO> {
   // const user = await this.userRepository.findOne({where: {id: userId}});
    const department = await this.departmentRepository.findOne({where: {id: data.departmentId}});
    const region = await this.regionRepository.findOne({where: {id: data.regionId}});
    const tagsId = data.tagsId.map(el => ({'id': el}));
    const tags = await this.tagRepository.find({where: tagsId});
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
