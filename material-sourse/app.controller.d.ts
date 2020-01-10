import { APIDto } from './api.dto';
import { Request } from 'express';
import { LXDHubAPISettings } from '.';
export declare class AppController {
    private Fs;
    private Path;
    private appSettings;
    constructor(Fs: any, Path: any, appSettings: LXDHubAPISettings);
    /**
     * Reads the package.json file and returns the parsed object
     */
    private getPackageJson;
    /**
     * Generates the docurl using the express request object
     * and the given relative doc url
     * @param req The express request
     */
    private getDocsUrl;
    /**
     * Returns general informations about the API.
     * @param req The express request object
     */
    apiInfo(req: Request): Promise<APIDto>;
}
