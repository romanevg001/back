import { RemoteService } from './remote.service';
import { ResponseDto } from '../common';
import { RemoteDto } from './dtos';
/**
 * The Remote-Controller, which is the API
 * interface for Remote-Operations.
 */
export declare class RemoteController {
    private readonly remoteService;
    constructor(remoteService: RemoteService);
    /**
     * Returns all remotes
     */
    findAll(): Promise<ResponseDto<RemoteDto[]>>;
}
