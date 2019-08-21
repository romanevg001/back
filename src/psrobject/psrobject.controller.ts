import { Controller, Get, Param, UseGuards, Body, Delete, Post, Put, Query } from '@nestjs/common';
import { PsrobjectService } from './psrobject.service';
import { PsrobjectRQ } from './psrobject.dto';
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
    return this.psrobjectService.read(user);
  }

  @Post()
  // @UseGuards(new AuthGuard())
  create(
    @Body() data: PsrobjectRQ,
  ) {
    return this.psrobjectService.create(data);
  }

  @Put(':id')
  // @UseGuards(new AuthGuard())
  update(
    @Param('id') id: string,
    @Body() data: Partial<PsrobjectRQ>,
  ) {
    return this.psrobjectService.update(id, data);
  }

  @Delete(':id')
  // @UseGuards(new AuthGuard())
  destroy(@Param('id') id: string ) {
    return this.psrobjectService.destroy(id);
  }

}
