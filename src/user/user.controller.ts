import { Controller, Post, Get, Body, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
// import { AuthGuard } from 'src/shared/auth.guard';
// import { User } from './user.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class UserController {

  constructor(
    private userService: UserService,
  ) {}

  @Get('api/users')
  showAllUsers(@Query('page') page: number) {
    return this.userService.showAll(page);
  }

  @UseGuards(AuthGuard())
  @Post('login')
  login(@Body() data: UserDTO) {
    return this.userService.login(data);

  }

  @Post('register')
  register(@Body() data: UserDTO) {
    return this.userService.register(data);

  }

}
