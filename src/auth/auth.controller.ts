import { Body, Controller, Post, Get } from '@nestjs/common';

import { UserService } from '../user/user.service';

// import { Payload } from '../types/payload';
import { LoginDTO, RegisterDTO } from './auth.dto';
import { AuthService } from './auth.service';

export interface Payload {
  username: string;
}

@Controller('api')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() userDTO: LoginDTO) {
    const user = await this.userService.findByLogin(userDTO);
    const payload = {
      username: user.username,
    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }

  @Post('register')
  async register(@Body() userDTO: RegisterDTO) {
    const user = await this.userService.register(userDTO);
    const payload = {
      username: user.username,
    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }

}
