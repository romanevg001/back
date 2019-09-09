import { UserService } from './user.service';
import { UserDTOFull } from './user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    showAllUsers(page: number): Promise<import("./user.dto").UserRO[]>;
    read(username: string): Promise<import("./user.dto").UserRO>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
    update(id: string, data: UserDTOFull): Promise<import("./user.dto").UserRO>;
}
