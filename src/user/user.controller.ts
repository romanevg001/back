import { Controller, Post, Get, Body, Query, UseGuards, Param, Put, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO, UserDTOFull } from './user.dto';
import { ValidationPipe } from 'src/shared/validation.pipe';
// import { User } from './user.decorator';

@Controller()
export class UserController {

  constructor(
    private userService: UserService,
  ) {}

  @Get('api/users')
  showAllUsers(@Query('page') page: number) {
    return this.userService.showAll(page);
  }

  @Post('login')
  login(@Body() data: UserDTO) {
    return this.userService.login(data);

  }

  @Post('register')
  @UsePipes(new ValidationPipe())
  register(@Body() data: UserDTOFull) {
    return this.userService.register(data);
  }

  @Put('api/user/:id')
  update(@Param('id') id: string, @Body() data: UserDTO) {
    return this.userService.update(id, data);
  }

}
