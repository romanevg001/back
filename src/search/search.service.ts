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

    if (data.searchInPsrObjects) {
      return await this.searchInPsrObjects(data);
    }

    // @IsBoolean()
    // searchInDocuments: boolean;
  
    // @IsBoolean()
    // searchInPsrObjects: boolean;
    // const tages = await this.psrobjectRepository.find({
    //   relations: ['psrObjects'],
    //   take: 25,
    //   skip: 25 * (page - 1 ),
    // });
    // return tages;
  }


  async searchInPsrObjects(data: Partial<SearchDTO>) {
//     documentTypes: []
// folders: []
// industries: ["3906b0c7-9f21-4d5f-98cd-f2b27496e8a5"]
// materialTypes: []
// regions: []
// requestedString: "klkll;"
// searchInBoxSolutions: false
// searchInDocuments: false
// searchInPsrObjects: true

    const search = await this.psrobjectRepository.find({
      where: [
        {title: data.requestedString},
        {choiceJustification: data.requestedString},
    //    ...data.regions.map(region => {region: region}),
      ],
      relations: ['region'],
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
