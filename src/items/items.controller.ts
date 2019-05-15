import { Controller, Get, Query, Post, Body, Param, Delete } from '@nestjs/common';

import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { Iitem } from './interfaces/item.interface';

@Controller('item')
export class ItemsController {
  constructor(
    private readonly itemsService: ItemsService,
  ) {}

  @Get()
  listItems(@Query() sss): Iitem[] {
   // console.log( sss);
    return this.itemsService.findAll();
  }

  @Get(':id')
  getItem(@Param('id') paramId): string {
    return 'paramId: ' + paramId;
  }

  @Post()
  createItem(@Body() item: CreateItemDto): string {
    return 'item: ' + item;
  }

  @Delete(':id')
  deleteItem(@Param('id') paramId): string {
    return 'delete paramId: ' + paramId;
  }

}
