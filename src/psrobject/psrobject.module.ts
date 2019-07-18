import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PsrobjectController } from './psrobject.controller';
import { PsrobjectService } from './psrobject.service';
import { PsrobjectEntity } from './psrobject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PsrobjectEntity])],
  controllers: [PsrobjectController],
  providers: [PsrobjectService],
})
export class PsrobjectModule {}
