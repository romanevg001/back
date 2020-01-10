/// <reference types="node" />
import * as Path from 'path';
export declare type PathType = typeof Path;
/**
 * The Path provider, which encapsulates
 * the Path package into a injectable
 * module
 */
export declare const PathProvider: {
    provide: string;
    useFactory: () => typeof Path;
};
