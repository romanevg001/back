import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
export declare class HttpExceptionFilter implements ExceptionFilter {
    private logger;
    constructor();
    /**
     * Catches exceptions, thrown from the Appliaction
     * and responds accordingly
     * @param exception The exception which is thrown
     * @param response The response object from Express
     */
    catch(exception: HttpException, host: ArgumentsHost): void;
}
