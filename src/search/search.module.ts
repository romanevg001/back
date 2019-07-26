import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PsrobjectEntity} from '../psrobject/psrobject.entity';
import { SearchController} from './search.controller';
import { SearchService} from './search.service';

@Module({
  imports: [TypeOrmModule.forFeature([ PsrobjectEntity])],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
