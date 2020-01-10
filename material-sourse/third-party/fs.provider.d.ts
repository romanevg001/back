import * as Fs from 'fs-extra';
export declare type FsType = typeof Fs;
/**
 * The Fs provider, which encapsulates
 * the Fs package into a injectable
 * module
 */
export declare const FsProvider: {
    provide: string;
    useFactory: () => any;
};
