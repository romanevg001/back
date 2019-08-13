import { Controller, Get, Post, Delete, Body, Param, Put, Logger, UseGuards, Query } from '@nestjs/common';
import { BoxService } from './box.service';
import { AuthGuard } from '@nestjs/passport';
import { BoxRQ } from './box.dto';

@Controller('api/box')
export class BoxController {
  constructor(
    private boxService: BoxService,
  ) {}

  @Get()
  readList() {
    return this.boxService.readList();
  }

  @Get(':id')
  read(@Param('id') id: string) {
    return this.boxService.read(id);
  }

  @Post()
  @UseGuards(AuthGuard())
  create(@Body() data: BoxRQ ) {
    return this.boxService.create(data);
  }

}
