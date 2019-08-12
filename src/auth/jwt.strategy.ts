import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';

export const jwtConstants = {
  secret: 'secretKey',
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallback: true,
      // ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  public async validate(req, payload, done) {
    const isValid = await this.authService.validateUser(payload);
    if (!isValid) {
      return done('Unauthorized', null);
    } else {
      return done(null, payload);
    }
  }

  // async validate(username: string, userId: string) {
  //   return {
  //     // userId: userId,
  //     // username: username
  //   };
  // }
}
