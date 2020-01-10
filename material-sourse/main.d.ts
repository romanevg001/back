import { Interfaces, LogType } from '@lxdhub/common';
import { IDatabaseSettings } from '@lxdhub/db';
import { Application } from 'express';
/**
 * The LXDHub API settings
 */
export declare class LXDHubAPISettings {
    port?: number;
    hostUrl?: string;
    database: IDatabaseSettings;
    lxd?: Interfaces.ILXDRemoteAuthentication;
    logLevel?: LogType;
    docUrl: string;
}
/**
 * The LXDHub API is the interface for the
 * LXDHub Web user interface.
 */
export declare class LXDHubAPI implements Interfaces.ILXDHubHttpService {
    private settings;
    private server?;
    private app;
    private logger;
    private url;
    constructor(settings: LXDHubAPISettings, server?: Application);
    /**
     * Conigurates Swagger for Nest
     */
    private setupSwagger;
    /**
     * Creates the Nest App
     */
    private createNestApp;
    /**
     * Setup the middleware for LXDHub API
     */
    private setupMiddleware;
    /**
     * Bootstraps the LXDHub API and returns the
     * Express instance
     */
    bootstrap(): Promise<Application>;
    /**
     * Bootstraps & starts LXDHub API with the given conifgurations
     */
    run(): Promise<void>;
}
