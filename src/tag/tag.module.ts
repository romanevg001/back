import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagEntity } from './tag.entity';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { TagResolver } from './tag.resolver';
import { PsrobjectEntity} from '../psrobject/psrobject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TagEntity, PsrobjectEntity])],
  controllers: [TagController],
  providers: [TagService,
  //  TagResolver
  ],
})
export class TagModule {}
