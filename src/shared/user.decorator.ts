import { createParamDecorator } from '@nestjs/common';
import { UserEntity } from 'src/user/user.entity';

export const CurrentUser = createParamDecorator(
  (data, [root, args, ctx, info]) => ctx.req.user,
);

export const GetUser = createParamDecorator(
  (data, req): UserEntity => {
console.log('req.user',req.user)
    return req.user;
  }
);
