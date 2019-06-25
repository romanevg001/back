import { Controller, Get, Post, Delete } from '@nestjs/common';
import { IdeaService } from './idea.service';

@Controller('idea')
export class IdeaController {

  constructor(
    private ideaService: IdeaService,
  ){}

  @Get()
  getList(){}

  @Get(':id')
  getOne(){}

  @Post()
  createIdea(){}

  @Put(':id')
  updateIdea(){}

  @Delete(':id')
  deleteIdea(){}

}
