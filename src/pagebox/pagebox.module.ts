import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { BoxEntity } from './box.entity';
// import { BoxController } from './box.controller';
import { PageBoxResolver } from './pagebox.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';

// import { BoxService } from './box.service';
// import { PsrobjectEntity } from '../psrobject/psrobject.entity';
// import { AuthModule } from 'src/auth/auth.module';

@Module({
  // imports: [
  //   TypeOrmModule.forFeature([BoxEntity, PsrobjectEntity]),
  //   AuthModule,
  // ],
  imports: [
    ClientsModule.register([
      { name: 'BoxMicroservice', transport: Transport.TCP },
    ]),
  ],
  providers: [PageBoxResolver],
})
export class PageBoxModule {}
