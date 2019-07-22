import { Controller, Get, Post, Delete, Body, Param, Put, Logger, UseGuards, Query } from '@nestjs/common';
import { TypeService } from './type.service';
import { AuthGuard } from 'src/shared/auth.guard';
import { Args } from '@nestjs/graphql';
import { TypeDTO } from './type.dto';

@Controller('api/type')
export class TypeController {
  constructor(
    private typeService: TypeService,
  ) {}

  @Get()
  getTypees() {
    return this.typeService.getTypes();
  }

  @Get(':id')
  getType(@Param('id') id: string) {
    return this.typeService.read(id);
  }

  @Post()
  //@UseGuards(new AuthGuard())
  create(@Body() data: TypeDTO ) {
    return this.typeService.create(data);
  }

  @Delete(':id')
  removeType(@Param('id') id: string) {
    return this.typeService.destroy(id);
  }

}
