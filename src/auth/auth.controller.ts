import { Body, Controller, Post, Get, Request, UseGuards, ValidationPipe, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
// import { UserService } from '../user/user.service';

// import { Payload } from '../types/payload';
import { LoginDTO, RegisterDTO, TokenDTO } from './auth.dto';
import { UserDTOFull, UserDTO } from '../user/user.dto';
import { AuthService } from './auth.service';
import { GetUser } from 'src/shared/user.decorator';
import { UserEntity } from 'src/user/user.entity';
// import { AuthCredentalsDTO } from './auth-credentails.dto';

export interface Payload {
  username: string;
}

@Controller()
export class AuthController {
  constructor(
    // private userService: UserService,
    private authService: AuthService,
  ) {}

  // @Post('login')
  // async login(@Body() data: LoginDTO) {
  //   const user = await this.userService.findByLogin(data);
  //   const payload: TokenDTO = {
  //     id: user.id,
  //     username: user.username,
  //   };
  //   const token = await this.authService.login(payload);
  //   return { user, token };
  // }

  // @Post('register')
  // async register(@Body() userDTO: RegisterDTO) {
  //   const user = await this.userService.register(userDTO);
  //   const payload = {
  //     username: user.username,
  //   };
  //   const token = await this.authService.signPayload(payload);
  //   return { user, token };
  // }

  //@UseGuards(AuthGuard('local'))

  // @UseGuards(AuthGuard('jwt'))
  // @Post('login')
  // async login(@Body(ValidationPipe) data: UserDTO) {
  //   const user = await this.userService.findByLogin(data);
  //   //return this.authService.login(user);
  // }

  // @Post('register')
  // @UseGuards(AuthGuard('jwt'))
  // async register(@Body(ValidationPipe) userDTO: RegisterDTO) {
  //   const user = await this.userService.register(userDTO);
  //   const payload = {
  //     username: user.username,
  //   };
  //   const token = await this.authService.signPayload(payload);
  //   return { user, token };
  // }


  @Post('/signup')
  async signUp(@Body(ValidationPipe) authCredentalsDTO: UserDTOFull): Promise<void> {
    return this.authService.signUp(authCredentalsDTO);
  }

  @Post('/signin')
  async signIn(@Body(ValidationPipe) authCredentalsDTO: UserDTO): Promise<{accessToken: string}> {
    return this.authService.signIn(authCredentalsDTO);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@GetUser() user: UserEntity) {
    console.log('user=>>>>', user);
  }

}
