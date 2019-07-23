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
  readRegions() {
    return this.dictionaryService.readRegions();
  }

  @Post('/regions')
  createRegion(@Body() data: RegionDTO ) {
    return this.dictionaryService.createRegion(data);
  }

  @Delete('/regions/:id')
  deleteRegion(@Param('id') id: string ) {
    return this.dictionaryService.destroyRegion(id);
  }

  @Get('/department')
  readDepartments() {
    return this.dictionaryService.readDepartments();
  }

  @Post('/department')
  createDepartment(@Body() data: DepartmentDTO ) {
    return this.dictionaryService.createDepartment(data);
  }

  @Delete('/department/:id')
  deleteDepartment(@Param('id') id: string ) {
    return this.dictionaryService.destroyDepartment(id);
  }

}
