import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
// import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { UserDTOFull, UserDTO } from '../user/user.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  logger = new Logger('AuthService');
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signUp(authCredentalsDTO: UserDTOFull): Promise<void> {
    return this.userRepository.signUp(authCredentalsDTO);
  }

  async signIn(authCredentalsDTO: UserDTO): Promise<any> {
    const user = await this.userRepository.validateUserPassword(authCredentalsDTO);
    this.logger.verbose(`signIn user: ${JSON.stringify(user)}`);

    if (!user && !user.username) {
      throw new UnauthorizedException({message: 'Invalid credentials'});
    }
    const payload: JwtPayload =  {username: user.username};

    const accessToken = await this.jwtService.sign(payload);
    this.logger.verbose(`signIn accessToken: ${accessToken}`);

    return {...user, accessToken};
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
