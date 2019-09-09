import { CommentService } from './comment.service';
import { CommentDTO } from './comment.dto';
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    showCommentsByIdea(idea: string, page: number): Promise<any[]>;
    showCommentsByUser(user: string, page: number): Promise<any[]>;
    createComment(idea: string, user: string, data: CommentDTO): Promise<any>;
    showComment(id: string): Promise<any>;
    destroyComment(id: string, user: string): Promise<any>;
}
