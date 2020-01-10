import { RemoteDto } from '.';
import { ResponseDto } from '../common';
import { RemoteFactory } from './factories';
import { Remote } from '@lxdhub/db';
import { Repository } from 'typeorm';
/**
 * Interface between the Database and API for
 * Remote operations.
 */
export declare class RemoteService {
    private remoteFactory;
    private remoteRepository;
    /**
     * Initializes the RemoteService.
     */
    constructor(remoteFactory: RemoteFactory, remoteRepository: Repository<Remote>);
    /**
     * Returns all remotes and
     * transforms the database remotes into data-transfer-objects
     */
    findAll(): Promise<ResponseDto<RemoteDto[]>>;
    /**
     * Returns a remote by the given name
     * @param {string} name The name of the remote
     *
     * @exception {NotFoundException} Gets the the given name does not exist in the database
     */
    findByName(name: any): Promise<Remote>;
    /**
     * Returns a remote by the given id
     * @param {number} id The id of the remote
     *
     * @exception {NotFoundException} Gets the the given id does not exist in the database
     */
    findById(id: any): Promise<Remote>;
}
