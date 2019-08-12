import { Module } from '@nestjs/common';

import { JwtStrategy } from './jwt.strategy';
// import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
      session: true,
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AuthController],
  providers: [
      AuthService,
      UserService,
      JwtStrategy,
  ],
})
export class AuthModule {}
