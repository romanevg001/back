import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoxEntity } from './box.entity';
import { BoxController } from './box.controller';
// import { BoxResolver } from './box.resolver';
import { BoxService } from './box.service';
import { PsrobjectEntity } from '../psrobject/psrobject.entity';
// import { AuthModule } from 'src/auth/auth.module';
import { typeOrmConfig } from '../../typeorm.config';

@Module({
  imports: [
    // TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([BoxEntity, PsrobjectEntity]),
    // AuthModule,
  ],
  controllers: [BoxController],
  providers: [ BoxService],
})
export class BoxModule {}
