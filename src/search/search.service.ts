import { Injectable, HttpException, Inject } from '@nestjs/common';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { PsrobjectEntity } from '../psrobject/psrobject.entity';
import { BoxEntity } from '../box/box.entity';
import { SearchDTO } from './search.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class SearchService {
  constructor(
    @Inject('BoxMicroservice') private readonly boxMicroservice: ClientProxy,
    @InjectRepository(PsrobjectEntity)
    private psrobjectRepository: Repository<PsrobjectEntity>,
    @InjectRepository(BoxEntity)
    private boxRepository: Repository<BoxEntity>,
  ) {
  }

  async filter(data: Partial<SearchDTO>) {

    return await this.searchInPsrObjects(data);

  }

  async find(data: Partial<SearchDTO>) {
    const searchPromises = [];
    if (data.searchInPsrObjects) {
      searchPromises.push(this.searchInPsrObjects(data));
    }
    if (data.searchInBoxSolutions) {
      searchPromises.push(this.searchInBoxSolutions(data));
    }
    // if (data.searchInDocuments) {

    // }

    return Promise.all(searchPromises).then(([psrobjects, boxes]) => {
      return {psrobjects, boxes};
    });

  }

  async searchInPsrObjects(data: Partial<SearchDTO>): Promise<PsrobjectEntity[]> {
    return await this.psrobjectRepository.find({
      where: [
        (data.requestedString) ? {title: Like('%' + data.requestedString + '%')} : {},
        (data.requestedString) ? {choiceJustification: Like('%' + data.requestedString + '%')} : {},
        ...((data.documentTypes) ? data.documentTypes.map(type => ({type})) : []),
        ...((data.industries) ? data.industries.map(department => ({department})) : []),
        ...((data.regions) ? data.regions.map(region => ({region})) : []),
      ],
     relations: ['department', 'region', 'tags', 'type'],
    });
  }

   async searchInBoxSolutions(data: Partial<SearchDTO>): Promise<BoxEntity[]> {
    const sss = await this.boxMicroservice.send({ cmd: 'LIST_BOX' }, data);
    console.log('sss', sss);

    return await this.boxRepository.find({
      where: [
        (data.requestedString) ? {name: Like('%' + data.requestedString + '%')} : {},
      ],
      relations: ['psrObjects'],
    });
  }

}

// requestedString: string;
//   page: number;
//   pageLimit: number;
//   searchInPsrObjects: boolean;
//   searchInBoxSolutions: boolean;
//   searchInDocuments: boolean;
//   industries: string[];
//   materialTypes: string[];
//   regions: string[];
//   documentTypes: string[];
//   folders: string[];
