import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PsrobjectController } from './psrobject.controller';
import { PsrobjectService } from './psrobject.service';
import { PsrobjectEntity } from './psrobject.entity';
import { DepartmentEntity} from '../dictionaries/departments/department.entity';
import { RegionEntity} from '../dictionaries/regions/region.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ PsrobjectEntity, DepartmentEntity, RegionEntity])],
  controllers: [PsrobjectController],
  providers: [ PsrobjectService],
})
export class PsrobjectModule {}
