import { createParamDecorator } from '@nestjs/common';
import { UserEntity } from 'src/user/user.entity';

export const CurrentUser = createParamDecorator(
  (data, [root, args, ctx, info]) => ctx.req.user,
);

export const GetUser = createParamDecorator(
  (data, req): UserEntity => req.user,
);
