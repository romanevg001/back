import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { IdeaEntity } from './idea.entity';
import { IdeaDTO } from './idea.dto';
import { UserEntity } from '../user/user.entity';


@Injectable()
export class IdeaService {
  constructor(
    @InjectRepository(IdeaEntity)
    private ideaRepository: Repository<IdeaEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {
  }

  private toResponseObject(idea: IdeaEntity) {
    return {...idea, author: idea.author ? idea.author.toResponseObject(false) : null };
  }

  async showAll() {
    const ideas = await this.ideaRepository.find({ relations: ['author'] });
    console.log('ideas', ideas);
    return ideas.map(idea => this.toResponseObject(idea));
  }

  async create(userId: string, data: IdeaDTO) {
    const user = await this.ideaRepository.findOne({where: {id: userId}});
    const idea = await this.ideaRepository.create({...data, author: user});
    console.log(idea);
    await this.ideaRepository.save(idea);
    return this.toResponseObject(idea);
  }

  async update(id: string, data: Partial<IdeaDTO>) {
    const idea = await this.ideaRepository.findOne({where: {id}});
    if (!idea) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.ideaRepository.update({ id }, data);
    return await this.ideaRepository.findOne({where: {id}});

  }

  async destroy(id: string) {
    const idea = await this.ideaRepository.findOne({where: {id}});
    if (!idea) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.ideaRepository.delete({ id });
    return idea;
  }


}
