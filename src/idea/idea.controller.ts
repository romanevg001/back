import { Controller, Get, Post, Delete, Body, Param, Put, Logger, UseGuards, Query } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaDTO } from './idea.dto';
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
  getList(@Query('page') page: number) {
    return this.ideaService.showAll(page);
  }

  @Get('/newest')
  showNewestIdeas(@Query('page') page: number) {
    return this.ideaService.showAll(page, true);
  }

  @Post()
  @UseGuards(new AuthGuard())
  async createIdea(@User('id') userId, @Body() data: IdeaDTO) {
    this.logDate({userId, data});
    if (data.idea) {
      return this.ideaService.create(userId, data);
    } else {
      return {error: 'Body is empty: ' + JSON.stringify(data)};
    }
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.ideaService.read(id);
  }

  @Put(':id')
  @UseGuards(new AuthGuard())
  updateIdea(
    @Param('id') id: string,
    @User('id') user: string,
    @Body() data: Partial<IdeaDTO>,
  ) {
    return this.ideaService.update(id, user, data);
  }

  @Delete(':id')
  @UseGuards(new AuthGuard())
  deleteIdea(
    @Param('id') id: string,
    @User('id') user: string,
  ) {
    return this.ideaService.destroy(id, user);
  }

  @Post(':id/upvote')
  @UseGuards(new AuthGuard())
  upvoteIdea(
    @Param('id') id: string,
    @User('id') user: string,
  ) {
    this.logDate({ id, user });
    return this.ideaService.upvote(id, user);
  }

  @Post(':id/downvote')
  @UseGuards(new AuthGuard())
  downvoteIdea(
    @Param('id') id: string,
    @User('id') user: string,
  ) {
    this.logDate({ id, user });
    return this.ideaService.downvote(id, user);
  }

  @Post(':id/bookmark')
  @UseGuards(new AuthGuard())
  bookmarkIdea( @Param('id') id: string, @User('id') user: string) {
    this.logDate({ id, user });
    return this.ideaService.bookmark(id, user);
  }

  @Delete(':id/bookmark')
  @UseGuards(new AuthGuard())
  unbookmarkIdea( @Param('id') id: string, @User('id') user: string) {
    this.logDate({ id, user });
    return this.ideaService.unbookmark(id, user);

  }

}
