import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { PsrobjectEntity } from '../psrobject/psrobject.entity';
import { SearchDTO } from './search.dto';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(PsrobjectEntity)
    private psrobjectRepository: Repository<PsrobjectEntity>,
  ) {
  }

  async find(data: Partial<SearchDTO>) {

      return await this.searchInPsrObjects(data);

  }

  async searchInPsrObjects(data: Partial<SearchDTO>) {

    const search = await this.psrobjectRepository.find({
      where: [
        (data.requestedString) ? {title: '%' + data.requestedString + '%'} : {},
        ...((data.documentTypes) ? data.documentTypes.map(type => ({type})) : []),
        ...((data.industries) ? data.industries.map(department => ({department})) : []),
        ...((data.regions) ? data.regions.map(region => ({region})) : []),
      ],
     relations: ['department', 'region', 'tags', 'type'],
    });
    return search;
  }

  // async searchInBoxSolutions(data: Partial<SearchDTO>) {
  //   const tag = await this.tagRepository.findOne({where: {id: tagId}, relations: ['psrObjects']});
  //   return tag;
  // }

//   async getTagsByPsrObject(PsrObjectId: string) {
//     const tag = await this.psrobjectRepository.findOne({where: {id: PsrObjectId}, relations: ['tags']});
//     return tag.tags;
//   }

//   async create(data: TagDTO) {
//      await this.tagRepository.save(data);
//      return data;
//   }

//   async update(data: TagDTO) {
//     await this.tagRepository.save(data);
//     return data;
//  }

//   async destroy(id: string) {
//     const tag = await this.tagRepository.findOne({where: {id}});
//     await this.tagRepository.remove(tag);
//     return tag;
//  }

}
