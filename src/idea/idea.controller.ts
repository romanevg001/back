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
  async createIdea(@Body() data: IdeaDTO) {
    console.log('createIdea(@Body() data: IdeaDTO)', data);

    if (data.idea) {
      return this.ideaService.create(data);
    } else {
      return {error: "Body is empty: " + JSON.stringify(data)};
    }
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
