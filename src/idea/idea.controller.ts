import { Controller, Get, Post, Delete, Body, Param, Put } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaDTO } from './idea.dto';

@Controller('idea')
export class IdeaController {

  constructor(
    private ideaService: IdeaService,
  ) {}

  @Get()
  getList() {
    return this.ideaService.showAll();
  }

  @Post()
  createIdea(@Body() data: IdeaDTO) {
    return this.ideaService.create(data);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.ideaService.read(id);
  }

  @Put(':id')
  updateIdea(@Param('id') id: string, @Body() data: Partial<IdeaDTO>) {
    return this.ideaService.update(id, data);
  }

  @Delete(':id')
  deleteIdea(@Param('id') id: string) {
    return this.ideaService.destroy(id);

  }

}
