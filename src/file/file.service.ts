import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { FileEntity } from './file.entity';
import { FileDTO } from './file.dto';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileEntity)
    private fileRepository: Repository<FileEntity>,
  ) {
  }

  // async getList(page: number = 1) {
  //   const list = await this.fileRepository.find({
  //     take: 25,
  //     skip: 25 * (page - 1 ),
  //   });
  //   return list;
  // }

  async read(id: string) {
    const item = await this.fileRepository.findOne({where: {id}});
    return item;
  }

  async load(data: FileDTO) {
     await this.fileRepository.save(data);
     return data;
  }

}
