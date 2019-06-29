import { Controller, Get, Query, Post, Body, Param, Delete, Inject } from '@nestjs/common';

import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { Iitem } from './interfaces/item.interface';

export class ItemsControllerParent {
  @Inject()
  readonly itemsService: ItemsService;

}

@Controller('item')
export class ItemsController extends ItemsControllerParent {
  constructor(
  ) {
    super();
  }

  @Get()
  listItems(@Query() sss): Iitem[] {
   // console.log( sss);npm
    return this.itemsService.findAll();
  }

  @Get(':id')
  getItem(@Param('id') paramId: string): Iitem {
    return this.itemsService.findOne(paramId);
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
