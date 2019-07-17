import { Controller, Get, Post, Delete, Body, Param, Put, Logger, UseGuards, Query } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import { RegionDTO } from './regions/region.dto';
import { AuthGuard } from 'src/shared/auth.guard';

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

}
