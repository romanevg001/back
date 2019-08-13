import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  // createToken(email: string, ttl?: number) {
  //   const expiresIn = ttl || 60 * 60;
  //   const secretOrKey = 'secretKey';
  //   const user = { email };
  //   const token = jwt.sign(user, secretOrKey, { expiresIn });
  //   return {
  //     expires_in: expiresIn,
  //     access_token: token,
  //   };
  // }

  async validateUser(payload): Promise<any> {
    const {username, password} = payload;
    const user = await this.userService.read(username, true);
    return !!user;
    // if (user && user.password === password) {
    //   const { password, ...result } = user;
    //   return !!user;
    // //  return null;
    // }
    // return null;
  }


  async signPayload(payload) {
    return jwt.sign(payload, process.env.SECRET, { expiresIn: '12h' });
  }

}
