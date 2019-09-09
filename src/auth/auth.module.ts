import { Module } from '@nestjs/common';

import { JwtStrategy } from './jwt.strategy';
// import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
// import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { UserRepository } from '../user/user.repository';
// import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import * as config from 'config';

const jwtConfig = config.get('jwt');


@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.SECRET || jwtConfig.secret ,
      signOptions: { expiresIn: jwtConfig.expiresIn || '60s' },
    }),
    TypeOrmModule.forFeature([UserRepository, UserEntity]),
  ],
  controllers: [AuthController],
  providers: [
      AuthService,
    //  UserService,
      JwtStrategy,
  ],
  exports: [
    PassportModule,
    JwtStrategy,
  ],
})
export class AuthModule {}
