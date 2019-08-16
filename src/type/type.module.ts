import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeEntity } from './type.entity';
import { TypeController } from './type.controller';
import { TypeService } from './type.service';
import { TypeResolver } from './type.resolver';
import { PsrobjectEntity} from '../psrobject/psrobject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeEntity, PsrobjectEntity])],
  controllers: [TypeController],
  providers: [TypeService,
    // TypeResolver
  ],
})
export class TypeModule {}
