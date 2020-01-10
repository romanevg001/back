/**
 * The data transfer object
 * for remotes
 */
export declare class RemoteDto {
    /**
     * The server url of the remote
     */
    serverUrl: string;
    /**
     * The protocol of the remote (e.g. 'lxd' or 'simplestreams')
     */
    protocol: string;
    /**
     * If the remote is readonly (no images can be pushed on)
     */
    readonly: boolean;
    /**
     * If the remote is set to public
     */
    public: boolean;
    /**
     * The display name of the remote
     */
    name: string;
    /**
     * The id of the remote
     */
    id: number;
}
