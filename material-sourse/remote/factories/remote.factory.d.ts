import { RemoteDto } from '..';
import { Factory } from '@lxdhub/common';
import { Remote } from '@lxdhub/db';
/**
 * Factory which produces RemoteDtos
 */
export declare class RemoteFactory extends Factory<RemoteDto> {
    /**
     * Maps the given database remote with the RemoteDtos and returns
     * the instances
     * @param remote The database remote, which should be mapped with a RemoteDto
     */
    entityToDto(remote: Remote): RemoteDto;
    /**
     * Maps the given database remotes with the RemoteDtos and returns
     * the instances as array
     * @param remotes The database remotes, which should be mapped with ImageListItemDtos
     */
    entitiesToDto(remotes: Remote[]): RemoteDto[];
}
