import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ImageListItemResponse } from '../dtos';
/**
 * Represents the inteceptor, which sets the URL attributes of the _links
 * object of the ImageListItemDtos
 */
export declare class ImageListItemInterceptor implements NestInterceptor<ImageListItemResponse, ImageListItemResponse> {
    /**
     * Intercepts the response of, by updating the _links object with
     * the appropiate urls.
     * @param req The express request object
     * @param call$ The response stream
     */
    intercept(context: ExecutionContext, next: CallHandler): Observable<ImageListItemResponse>;
}
