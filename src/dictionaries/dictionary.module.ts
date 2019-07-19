import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RegionEntity } from './regions/region.entity';
import { DepartmentEntity } from './departments/department.entity';
import { DictionaryResolver } from './dictionary.resolver';
import { DictionaryService } from './dictionary.service';
import { DictionaryController } from './dictionary.controller';
import { PsrobjectEntity} from '../psrobject/psrobject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegionEntity, DepartmentEntity, PsrobjectEntity])],
  controllers: [DictionaryController],
  providers: [DictionaryService],
})
export class DictionaryModule {}
