import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoxEntity } from './box.entity';
import { BoxController } from './box.controller';
import { BoxResolver } from './box.resolver';
import { BoxService } from './box.service';
import { PsrobjectEntity } from '../psrobject/psrobject.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([BoxEntity, PsrobjectEntity]),
    AuthModule,
  ],
  controllers: [BoxController],
  providers: [BoxResolver, BoxService],
})
export class BoxModule {}
