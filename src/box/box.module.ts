import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoxEntity } from './box.entity';
import { BoxController } from './box.controller';
import { BoxResolver } from './box.resolver';
import { BoxService } from './box.service';
import { PsrobjectEntity } from '../psrobject/psrobject.entity';
import { PassportModule } from '@nestjs/passport';
import { GraphQLModule } from '@nestjs/graphql';
import { PsrobjectModule } from '../psrobject/psrobject.module';
import { TypeGQLModule } from 'nestjs-type-graphql';

@Module({
  imports: [
    TypeOrmModule.forFeature([BoxEntity, PsrobjectEntity]),
    PassportModule.register({ defaultStrategy: 'jwt', session: true }),
    // GraphQLModule.forRoot({
    //   typePaths: ['./**/*.graphql'],
    //   include: [BoxModule, PsrobjectModule]
    // }),
    TypeGQLModule.forSchema({
      resolvers: [BoxResolver],
    }),
  ],
  controllers: [BoxController],
  providers: [BoxService],
})
export class BoxModule {}
