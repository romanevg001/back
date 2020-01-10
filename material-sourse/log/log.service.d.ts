import { LogType, WinstonLogger } from '@lxdhub/common';
import { LoggerService } from '@nestjs/common';
/**
 * The Winston Logger Strategy
 */
export declare class LogService extends WinstonLogger implements LoggerService {
    constructor(context: string, logLevel?: LogType);
    log(message: string): void;
    error(message: string): void;
    warn(message: string): void;
}
