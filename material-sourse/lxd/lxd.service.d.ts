import { Image, Remote } from '@lxdhub/db';
import Axios from 'axios';
import { LXDHubAPISettings } from '..';
import { SourceImageFactory } from './factories';
export declare class LXDService {
    private readonly axios;
    private sourceImageFactory;
    private settings;
    private logger;
    constructor(axios: typeof Axios, sourceImageFactory: SourceImageFactory, settings: LXDHubAPISettings);
    private getAxiosHttpsInstance;
    /**
     * Requests a new image on the given remote
     * @param url The url to which the image should be request
     * @param sourceImageDto The image
     */
    private requestNewImage;
    /**
     * Waits for the given operation to end
     * @param url The operation url
     */
    private waitForOperation;
    /**
     * Clones the image from the given sourceRemote to the given destinationRemote
     * @param image The image to be cloned
     * @param sourceRemote The source remote, from which the images comes from
     * @param destinationRemote The destination Remote
     */
    cloneImage(image: Image, sourceRemote: Remote, destinationRemote: Remote): Promise<string>;
    /**
     * Waits for the clone operation and returns the result
     * @param destinationRemote The destination remote
     * @param uuid The operation UUID from the LXD server
     */
    getCloneStatus(destinationRemote: Remote, uuid: string): Promise<any>;
}
