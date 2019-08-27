import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtPayload } from './jwt-payload.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/user/user.repository';
import { UserEntity } from 'src/user/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
 //   private authService: AuthService,
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // passReqToCallback: true,
      // ignoreExpiration: false,
      secretOrKey: process.env.SECRET,
    });
  }

  // public async validate(req, payload, done) {
  //   const isValid = await this.authService.validateUser(payload);
  //   if (!isValid) {
  //     return done('Unauthorized', null);
  //   } else {
  //     return done(null, payload);
  //   }
  // }

  async validate(payload: JwtPayload): Promise<UserEntity> {
    const {username} = payload;
    const user = await this.userRepository.findOne({ username });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
