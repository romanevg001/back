import { Controller, Get, Param, UseGuards, Body, Delete, Post, UsePipes, Query } from '@nestjs/common';
import { FileService } from './file.service';
import { FileDTO } from './file.dto';
import { AuthGuard } from 'src/shared/auth.guard';

@Controller('api/file')
export class FileController {
  constructor(
    private fileService: FileService,
  ) {}

  // @Get()
  // getList(@Query('page') page: number ) {
  //   return this.fileService.getList(page);
  // }

  @Get(':id')
  getOne(@Param('id') id: string ) {
    return this.fileService.read(id);
  }

  @Post()
  @UseGuards(new AuthGuard())
  setOne(
    @Body() data: FileDTO,
  ) {
    return this.fileService.load(data);
  }

}
