import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PsrobjectController } from './psrobject.controller';
import { PsrobjectService } from './psrobject.service';
import { PsrobjectEntity } from './psrobject.entity';
import { DepartmentEntity} from '../dictionaries/departments/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ PsrobjectEntity, DepartmentEntity])],
  controllers: [PsrobjectController],
  providers: [ PsrobjectService],
})
export class PsrobjectModule {}
