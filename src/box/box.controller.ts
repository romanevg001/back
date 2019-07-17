import { Controller, Get, Post, Delete, Body, Param, Put, Logger, UseGuards, Query } from '@nestjs/common';
import { BoxService } from './box.service';
import { AuthGuard } from 'src/shared/auth.guard';
import { Args } from '@nestjs/graphql';
import { BoxDTO } from './box.dto';

@Controller('api/box')
export class BoxController {
  constructor(
    private boxService: BoxService,
  ) {}

  @Get()
  getBoxes() {
    return this.boxService.getBoxes();
  }

  @Get(':id')
  getBox(@Param('id') id: string) {
    return this.boxService.getBox(id);
  }

  @Post()
  //@UseGuards(new AuthGuard())
  setRegions(@Body() data: BoxDTO ) {
    return this.boxService.setBox(data);
  }

}
