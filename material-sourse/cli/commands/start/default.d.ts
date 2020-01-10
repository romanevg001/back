import { Command, Options } from 'clime';
import { LogType } from '@lxdhub/common';
export declare class StartOptions extends Options {
    port: number;
    host: string;
    databaseName: string;
    databaseHost: string;
    databasePassword: string;
    databasePort: number;
    databaseUsername: string;
    cert: string;
    key: string;
    logLevel: LogType;
    docUrl: string;
}
export default class extends Command {
    execute(options: StartOptions): Promise<void>;
}
