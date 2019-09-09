import { IdeaService } from './idea.service';
import { IdeaDTO } from './idea.dto';
export declare class IdeaController {
    private ideaService;
    private logger;
    constructor(ideaService: IdeaService);
    private logDate;
    getList(page: number): Promise<import("./idea.dto").IdeaRO[]>;
    showNewestIdeas(page: number): Promise<import("./idea.dto").IdeaRO[]>;
    createIdea(userId: any, data: IdeaDTO): Promise<import("./idea.dto").IdeaRO | {
        error: string;
    }>;
    getOne(id: string): Promise<import("./idea.dto").IdeaRO>;
    updateIdea(id: string, user: string, data: Partial<IdeaDTO>): Promise<import("./idea.dto").IdeaRO>;
    deleteIdea(id: string, user: string): Promise<import("./idea.dto").IdeaRO>;
    upvoteIdea(id: string, user: string): Promise<import("./idea.dto").IdeaRO>;
    downvoteIdea(id: string, user: string): Promise<import("./idea.dto").IdeaRO>;
    bookmarkIdea(id: string, user: string): Promise<import("../user/user.dto").UserRO>;
    unbookmarkIdea(id: string, user: string): Promise<import("../user/user.dto").UserRO>;
}
