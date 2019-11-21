import { Controller, Get, Post, Param, Body, Redirect, UseGuards } from '@nestjs/common';

import { BoxService } from './box.service';
import { AuthGuard } from '@nestjs/passport';
import { Logger } from '@nestjs/common';
import { BoxRQ } from './box.dto';
import { MessagePattern, EventPattern } from '@nestjs/microservices';

@Controller()
export class BoxController {
  private logger = new Logger('BoxController');

  constructor(
    private boxService: BoxService,
  ) {}

  @MessagePattern('LIST_BOX')
  readList() {
    this.logger.verbose('@MessagePattern(LIST_BOX)');

    return this.boxService.readList();
  }

  // @Get(':id')
  // read(@Param('id') id: string) {
  //   return this.boxService.read(id);
  // }

  // @Post()
  // @UseGuards(AuthGuard())
  // @EventPattern('box_created')
  // create(@Body() data: BoxRQ ) {
  //   return this.boxService.create(data);
  // }

  // @Get('docs')
  // @Redirect('https://docs.nestjs.com', 301)
  // redirect () {
  // }


  // @MessagePattern({ cmd: 'sum' })
  // accumulate(data: number[]): number {
  //   return (data || []).reduce((a, b) => a + b);
  // }


}
