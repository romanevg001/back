import { Injectable, ExecutionContext, Catch, HttpException, ArgumentsHost  } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext, GqlExceptionFilter, GqlArgumentsHost } from '@nestjs/graphql';

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context).getContext();
   console.log('GqlAuthGuard ==> ', ctx.req);

    return ctx.req;
  }
}



// tslint:disable-next-line:max-classes-per-file
@Catch(HttpException)
export class HttpExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    return exception;
  }
}
