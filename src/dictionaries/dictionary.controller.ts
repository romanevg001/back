import { Controller, Get, Post, Delete, Body, Param, Put, Logger, UseGuards, Query } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import { RegionDTO } from './regions/region.dto';
import { DepartmentDTO } from './departments/department.dto';

@Controller('api')
export class DictionaryController {
  constructor(
    private dictionaryService: DictionaryService,
  ) {}

  @Get('/regions')
  getRegions() {
    return this.dictionaryService.getRegions();
  }

  @Post('/regions')
  setRegions(@Body() data: RegionDTO ) {
    return this.dictionaryService.setRegions(data);
  }

  @Get('/department')
  getDepartment() {
    return this.dictionaryService.getDepartment();
  }

  @Post('/department')
  setDepartment(@Body() data: DepartmentDTO ) {
    return this.dictionaryService.setDepartment(data);
  }

}
