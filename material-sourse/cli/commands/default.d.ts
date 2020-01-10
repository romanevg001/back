import { Command, Options } from 'clime';
export declare class DefaultOptions extends Options {
    version: boolean;
}
export default class APICommand extends Command {
    execute(options: DefaultOptions): Promise<any>;
}
