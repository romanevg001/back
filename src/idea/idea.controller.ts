import { Controller, Get, Post, Delete, Body, Param, Put, Logger, UseGuards } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaDTO } from './idea.dto';
import { IdeaEntity } from './idea.entity';
import { GetByIdPipe } from '../shared/get-by-id.pipe';
import { AuthGuard } from 'src/shared/auth.guard';
import { User } from '../user/user.decorator';

@Controller('api/ideas')
export class IdeaController {
  private logger =  new Logger('IdeaController');
  constructor(
    private ideaService: IdeaService,
  ) {}

  private logDate(options: any) {
    options.user && this.logger.log('USER ' + JSON.stringify(options.user));
    options.data && this.logger.log('DATA ' + JSON.stringify(options.body));
    options.id && this.logger.log('IDEA ' + JSON.stringify(options.id));
  }

  @Get()
  getList() {
    return this.ideaService.showAll();
  }

  @Post()
  @UseGuards(new AuthGuard())
  async createIdea(@User('id') user, @Body() data: IdeaDTO) {
    this.logDate({user, data});
    if (data.idea) {
      return this.ideaService.create(user, data);
    } else {
      return {error: 'Body is empty: ' + JSON.stringify(data)};
    }
  }

  @Get(':id')
  getOne(@Param('id', GetByIdPipe) idea: string) {
    return idea;
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
