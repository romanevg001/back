import { CommentService } from 'src/comment/comment.service';
export declare class CommentResolver {
    private commentService;
    constructor(commentService: CommentService);
    comment(id: string): Promise<any>;
    createComment(ideaId: string, comment: string, user: any): Promise<any>;
    deleteComment(id: string, user: any): Promise<any>;
}
