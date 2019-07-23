import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PsrobjectController } from './psrobject.controller';
import { PsrobjectService } from './psrobject.service';
import { PsrobjectEntity } from './psrobject.entity';
import { PsrobjectResolver } from './psrobject.resolver';
import { DepartmentEntity} from '../dictionaries/departments/department.entity';
import { RegionEntity} from '../dictionaries/regions/region.entity';
import { TagEntity} from '../tag/tag.entity';
import { TypeEntity} from '../type/type.entity';
import { TagService} from '../tag/tag.service';

@Module({
  imports: [TypeOrmModule.forFeature([ PsrobjectEntity, DepartmentEntity, RegionEntity, TagEntity, TypeEntity])],
  controllers: [PsrobjectController],
  providers: [ PsrobjectService, PsrobjectResolver, TagService],
})
export class PsrobjectModule {}
