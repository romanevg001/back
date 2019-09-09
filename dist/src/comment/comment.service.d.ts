import { CommentEntity } from './comment.entity';
import { IdeaEntity } from '../idea/idea.entity';
import { UserEntity } from '../user/user.entity';
import { CommentDTO } from './comment.dto';
import { Repository } from 'typeorm';
export declare class CommentService {
    private commentRepository;
    private ideaRepository;
    private userRepository;
    constructor(commentRepository: Repository<CommentEntity>, ideaRepository: Repository<IdeaEntity>, userRepository: Repository<UserEntity>);
    private toResponseObject;
    showByIdea(id: string, page?: number): Promise<any[]>;
    showByUser(id: string, page?: number): Promise<any[]>;
    show(id: string): Promise<any>;
    create(ideaId: string, userId: string, data: CommentDTO): Promise<any>;
    destroy(id: string, userId: string): Promise<any>;
}
