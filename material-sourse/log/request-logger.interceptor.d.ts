import { ExecutionContext, NestInterceptor, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class RequestLoggerInterceptor implements NestInterceptor {
    private logger;
    /**
     * Inititalizes the RequestLoggerInterceptor
     * and its logger
     */
    constructor();
    /**
     * Intercepts every request and logs it
     * @param context The execution context
     * @param call$ The stream to for callback
     */
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
