import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository, Like } from 'typeorm';
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

  async filter(data: Partial<SearchDTO>) {

    return await this.searchInPsrObjects(data);

}

  async find(data: Partial<SearchDTO>) {
      // let where = [
      //   (data.requestedString) ? {title: Like('%' + data.requestedString + '%')} : {},
      //   (data.requestedString) ? {choiceJustification: Like('%' + data.requestedString + '%')} : {},
      //   // ...((data.documentTypes) ? data.documentTypes.map(type => ({type})) : []),
      //   // ...((data.industries) ? data.industries.map(department => ({department})) : []),
      //   // ...((data.regions) ? data.regions.map(region => ({region})) : []),
      // ]
      return await this.searchInPsrObjects(data);

  }

  async searchInPsrObjects(data: Partial<SearchDTO>) {

    const search = await this.psrobjectRepository.find({
      where: [
        (data.requestedString) ? {title: Like('%' + data.requestedString + '%')} : {},
        (data.requestedString) ? {choiceJustification: Like('%' + data.requestedString + '%')} : {},
        ...((data.documentTypes) ? data.documentTypes.map(type => ({type})) : []),
        ...((data.industries) ? data.industries.map(department => ({department})) : []),
        ...((data.regions) ? data.regions.map(region => ({region})) : []),
      ],
     relations: ['department', 'region', 'tags', 'type'],
    });
    return search;
  }

}
