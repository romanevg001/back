import { IdeaService } from './idea.service';
import { CommentService } from '../comment/comment.service';
export declare class IdeaResolver {
    private ideaService;
    private commentService;
    constructor(ideaService: IdeaService, commentService: CommentService);
    ideas(page: number, newest: boolean): Promise<import("./idea.dto").IdeaRO[]>;
    idea(id: string): Promise<import("./idea.dto").IdeaRO>;
    createIdea(idea: string, description: string, user: any): Promise<import("./idea.dto").IdeaRO>;
    updateIdea(id: string, idea: string, description: string, user: any): Promise<import("./idea.dto").IdeaRO>;
    deleteIdea(id: string): Promise<import("./idea.dto").IdeaRO>;
    upvote(id: string, user: any): Promise<import("./idea.dto").IdeaRO>;
    downvote(id: string, user: any): Promise<import("./idea.dto").IdeaRO>;
    bookmark(id: string, user: any): Promise<import("../user/user.dto").UserRO>;
    unbookmark(id: string, user: any): Promise<import("../user/user.dto").UserRO>;
    comments(idea: any): Promise<any[]>;
}
