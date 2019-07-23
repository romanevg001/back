import { Controller, Get, Post, Delete, Body, Param, Put, Logger, UseGuards, Query } from '@nestjs/common';
import { TagService } from './tag.service';
import { AuthGuard } from 'src/shared/auth.guard';
import { Args } from '@nestjs/graphql';
import { TagDTO } from './tag.dto';

@Controller('api/tag')
export class TagController {
  constructor(
    private tagService: TagService,
  ) {}

  @Get()
  readList() {
    return this.tagService.readList();
  }

  @Get(':id')
  read(@Param('id') id: string) {
    return this.tagService.read(id);
  }

  @Post()
  //@UseGuards(new AuthGuard())
  create(@Body() data: TagDTO ) {
    return this.tagService.create(data);
  }

  @Delete(':id')
  destroy(@Param('id') id: string) {
    return this.tagService.destroy(id);
  }

}
