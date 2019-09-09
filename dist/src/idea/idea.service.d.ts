import { Repository } from 'typeorm';
import { IdeaEntity } from './idea.entity';
import { IdeaDTO, IdeaRO } from './idea.dto';
import { UserEntity } from '../user/user.entity';
export declare class IdeaService {
    private ideaRepository;
    private userRepository;
    constructor(ideaRepository: Repository<IdeaEntity>, userRepository: Repository<UserEntity>);
    private toResponseObject;
    private ensureOwnership;
    private vote;
    showAll(page?: number, newest?: boolean): Promise<IdeaRO[]>;
    read(id: string): Promise<IdeaRO>;
    create(userId: string, data: IdeaDTO): Promise<IdeaRO>;
    update(id: string, userId: string, data: Partial<IdeaDTO>): Promise<IdeaRO>;
    destroy(id: string): Promise<IdeaRO>;
    upvote(id: string, userId: string): Promise<IdeaRO>;
    downvote(id: string, userId: string): Promise<IdeaRO>;
    bookmark(id: string, userId: string): Promise<import("../user/user.dto").UserRO>;
    unbookmark(id: string, userId: string): Promise<import("../user/user.dto").UserRO>;
}
