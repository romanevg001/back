import { HttpStatus } from '@nestjs/common';
import { LogService } from '.';
import { LogDto } from './dtos';
/**
 * The Remote-Controller, which is the API
 * interface for Remote-Operations.
 */
export declare class LogController {
    logger: LogService;
    /**
     * Initializes the controller
     */
    constructor();
    /**
     * Returns all remotes
     */
    log(log: LogDto): HttpStatus;
}
