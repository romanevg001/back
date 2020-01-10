/**
 * The alias dto for a source image
 */
export declare class AliasDto {
    /**
     * The name of the alias
     */
    name: string;
    /**
     * The description of the alias
     */
    description: string;
}
/**
 * The source information of an image / remote
 */
export declare class SourceDto {
    /**
     * The type of the source.
     * Default is image
     */
    type: string;
    /**
     * The mode of the clone.
     * Only pull is supported by LXC Rest API for now
     * pull is default
     */
    mode: string;
    /**
     * The remote server url of the image source (pull mode only)
     */
    server?: string;
    /**
     * The protocol of the clone
     * Either lxd or simplestreams
     * Default is lxd
     */
    protocol: 'simplestreams' | 'lxd';
    /**
     * The remote sercret.
     * Pull mode only, private images only
     */
    secret?: string;
    /**
     * The PEM certificate
     * If not mentioned, system certificate is used
     */
    certificate?: string;
    /**
     * Fingerprint of the image
     * Must be set if alias is not.
     * A SHA256 string
     */
    fingerprint?: string;
    /**
     * The alias of the image
     */
    alias?: string;
}
/**
 * The source image properties
 */
export declare class SourceImagePropertiesDto {
    os?: string;
}
/**
 * The source image as defined in
 * https://github.com/lxc/lxd/blob/master/doc/rest-api.md#post-7
 */
export declare class SourceImageDto {
    /**
     * The filename of the image
     * Used for export (optional)
     */
    filename?: string;
    /**
     * Whether the image can be downloaded by untrusted users
     */
    public: boolean;
    /**
     * Image properties (optional, applied on top of source properties)
     */
    properties?: SourceImagePropertiesDto;
    /**
     * Set initial aliases ("image_create_aliases" API extension)
     */
    aliases: AliasDto[];
    /**
     * The source, which defines the source
     * remote
     */
    source: SourceDto;
}
