import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoxEntity } from './box.entity';
import { BoxController } from './box.controller';
import { BoxService } from './box.service';

@Module({
  imports: [TypeOrmModule.forFeature([BoxEntity])],
  controllers: [BoxController],
  providers: [BoxService],
})
export class BoxModule {}
