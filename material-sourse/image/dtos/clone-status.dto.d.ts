/**
 * The CloneStatusDto represents the data
 * transfer object, which is used for requesting
 * the status of a clone operation
 */
export declare class CloneStatusDto {
    /**
     * The id of the destination remote
     */
    destinationRemoteId: number;
    /**
     * The operation UUID from the LXD Server
     */
    operation: string;
    /**
     * The id of the image
     */
    imageId: number;
}
