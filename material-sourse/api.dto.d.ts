import { Interfaces } from '@lxdhub/common';
export declare class APILinks implements Interfaces.APILinks {
    /**
     * The homepage url of the package
     */
    homepage: string;
    /**
     * The bug report url of the package
     */
    bug_report: string;
    /**
     * The repository url of the package
     */
    repository: string;
    /**
     * The api documentation url
     */
    docs: string;
}
export declare class APIDto implements Interfaces.APIDto {
    /**
     * The version of the API
     */
    api_version: string;
    /**
     * The version of the npm package of the running API
     */
    package_version: string;
    /**
     * The name of the npm package
     */
    name: string;
    /**
     * The description of the npm package
     */
    description: string;
    /**
     * Further links related to the API
     */
    _links: APILinks;
}
