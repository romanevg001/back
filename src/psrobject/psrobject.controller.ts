import { Controller, Get, Param, UseGuards, Body, Delete, Post, UsePipes, Query } from '@nestjs/common';
import { PsrobjectService } from './psrobject.service';
import { PsrobjectDTO } from './psrobject.dto';
import { AuthGuard } from 'src/shared/auth.guard';

@Controller('api/psrobject')
export class PsrobjectController {
  constructor(
    private psrobjectService: PsrobjectService,
  ) {}

  @Get()
  getList(@Query('page') page: number ) {
    return this.psrobjectService.getList(page);
  }

  @Get(':id')
  getOne(@Param('id') user: string ) {
    return this.psrobjectService.getOne(user);
  }

  @Post()
  @UseGuards(new AuthGuard())
  setOne(
    @Body() data: PsrobjectDTO,
  ) {
    return this.psrobjectService.setOne(data);
  }

}
