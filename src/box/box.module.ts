import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoxEntity } from './box.entity';
import { BoxController } from './box.controller';
import { BoxResolver } from './box.resolver';
import { BoxService } from './box.service';
import { PsrobjectEntity } from '../psrobject/psrobject.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([BoxEntity, PsrobjectEntity]),
    PassportModule.register({ defaultStrategy: 'jwt', session: true }),
  ],
  controllers: [BoxController],
  providers: [BoxService, BoxResolver],
})
export class BoxModule {}
