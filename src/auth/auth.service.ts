import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { UserDTOFull } from '../user/user.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
// import { AuthCredentalsDTO } from './auth-credentails.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async sygnUp(authCredentalsDTO: UserDTOFull): Promise<void> {
    return this.userRepository.signUp(authCredentalsDTO);
  }

  // async validateUser(username: string, pass: string): Promise<boolean> {
  //   const user = await this.userService.read(username, true);
  //   if (user && user.password === pass) {
  //     // const { password, ...result } = user;
  //     return !!user;
  //   }
  //   return null;
  // }

  // async login(user: any) {
  //   const payload: TokenDTO = { username: user.username, id: user.id };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }

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

  // async validateUser(payload): Promise<any> {
  //   const {username, password} = payload;
  //   const user = await this.userService.read(username, true);
  //   return !!user;
  //   // if (user && user.password === password) {
  //   //   const { password, ...result } = user;
  //   //   return !!user;
  //   // //  return null;
  //   // }
  //   // return null;
  // }


  // async signPayload(payload) {
  //   return jwt.sign(payload, process.env.SECRET, { expiresIn: '15m' });
  // }

}
