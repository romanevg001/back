import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PsrobjectController } from './psrobject.controller';
import { PsrobjectService } from './psrobject.service';
import { PsrobjectEntity } from './psrobject.entity';
import { PsrobjectResolver } from './psrobject.resolver';
import { DepartmentEntity} from '../dictionaries/departments/department.entity';
import { RegionEntity} from '../dictionaries/regions/region.entity';
import { TagEntity} from '../tag/tag.entity';
import { TagService} from '../tag/tag.service';
import { TypeEntity} from '../type/type.entity';
import { TypeService} from '../type/type.service';
@Module({
  imports: [TypeOrmModule.forFeature([ PsrobjectEntity, DepartmentEntity, RegionEntity, TagEntity, TypeEntity])],
  controllers: [PsrobjectController],
  providers: [ PsrobjectService, PsrobjectResolver, TagService, TypeService],
})
export class PsrobjectModule {}
