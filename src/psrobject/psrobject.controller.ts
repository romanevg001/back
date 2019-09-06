import { Controller, Get, Param, UseGuards, Body, Delete, Post, Put, Query } from '@nestjs/common';
import { PsrobjectService } from './psrobject.service';
import { PsrobjectRQ } from './psrobject.dto';
// import { AuthGuard } from 'src/shared/auth.guard';
import { FilterPsrobjectDTO} from './filter-psrobject.dto';
import { ValidationPipe } from 'src/shared/validation.pipe';
import { PsrobjectEntity } from './psrobject.entity';
import { GetUser, CurrentUser } from 'src/shared/user.decorator';
import { UserEntity } from 'src/user/user.entity';
import { Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Controller('api/psrobject')
export class PsrobjectController {
  private logger = new Logger('PsrobjectController');

  constructor(
    private psrobjectService: PsrobjectService,
  ) {}

  @Get('objects')
  @UseGuards(AuthGuard())
  getPsrobject(
    @Query(ValidationPipe) filterPsrobjectDTO: FilterPsrobjectDTO,
    @GetUser() user: UserEntity,
  ): Promise<PsrobjectEntity[]> {
    this.logger.verbose(`User "${user.username}" retriving all psrobjects. Filter: ${JSON.stringify(filterPsrobjectDTO)}`);
    return this.psrobjectService.getPsrobject(filterPsrobjectDTO, user);
  }

  @Get()
  getList(
    @Query('page') page: number,
    ) {
    this.logger.verbose(`User  retriving all psrobjects.`);

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
