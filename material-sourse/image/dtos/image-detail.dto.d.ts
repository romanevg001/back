/**
 * The ata transfer object for ImageDetailDto-Architecture
 */
export declare class ArchitectureDto {
    processorName: string;
    humanName: string;
}
/**
 * The ata transfer object for ImageDetailDto-Operating System
 */
export declare class OperatingSystemDto {
    version: string;
    release: string;
    distribution: string;
}
/**
 * The ata transfer object for ImageDetailDto-Aliases
 */
export declare class AliasDto {
    name: string;
    description: string;
}
export declare class RemoteImageAvailabilityDto {
    name: string;
    /**
     * Returns if the image is cloneable to this remote
     */
    cloneable: boolean;
    id: number;
    available: boolean;
}
/**
 * The data transfer object,
 * which represents a detailed
 * image item.
 */
export declare class ImageDetailDto {
    id: number;
    /**
     * The human readable fingerprint of the image (12 characters long)
     */
    fingerprint: string;
    /**
     * The full fingerprint of the image
     */
    fullFingerprint: string;
    uploadedAt: Date;
    createdAt: Date;
    description: string;
    size: string;
    label: string;
    serial: string;
    autoUpdate: boolean;
    expiresAt: Date;
    lastUsedAt: Date;
    architecture: ArchitectureDto;
    operatingSystem: OperatingSystemDto;
    aliases: AliasDto[];
    remotes: RemoteImageAvailabilityDto[];
    public: boolean;
    /**
     * If this image is cloneable
     */
    cloneable: boolean;
}
