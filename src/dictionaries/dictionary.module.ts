import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RegionEntity } from './regions/region.entity';
import { DepartmentEntity } from './departments/department.entity';
import { DictionaryResolver } from './dictionary.resolver';
import { DictionaryService } from './dictionary.service';
import { DictionaryController } from './dictionary.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RegionEntity, DepartmentEntity])],
  controllers: [DictionaryController],
  providers: [DictionaryService, DictionaryResolver],
})
export class DictionaryModule {}
