import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { AuthGuard } from 'src/shared/auth.guard';
import { User } from './user.decorator';

@Controller()
export class UserController {

  constructor(
    private userService: UserService,
  ) {}

  @Get('api/users')
  showAllUsers() {
    return this.userService.showAll();
  }

  @Post('login')
  login(@Body() data: UserDTO) {
    return this.userService.login(data);

  }

  @Post('register')
  register(@Body() data: UserDTO) {
    return this.userService.register(data);

  }

}
