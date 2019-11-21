import { Injectable, ExecutionContext  } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  logger = new Logger('GqlAuthGuard');
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context).getContext();
    this.logger.verbose(`User AuthGuard: `);
    // console.log(context);

    // console.log(ctx.req);
    return ctx.req;
  }
}

