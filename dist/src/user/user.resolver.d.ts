import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';
export declare class UserResolver {
    private userService;
    private commentService;
    constructor(userService: UserService, commentService: CommentService);
    users(page: number): Promise<import("./user.dto").UserRO[]>;
    user(username: string): Promise<import("./user.dto").UserRO>;
    whoami(user: any): Promise<import("./user.dto").UserRO>;
    login(username: string, password: string): Promise<import("./user.dto").UserRO>;
    register(username: string, password: string, email: string): Promise<import("./user.dto").UserRO>;
    comments(user: any): Promise<any[]>;
}
