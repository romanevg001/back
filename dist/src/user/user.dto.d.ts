import { IdeaEntity } from '../idea/idea.entity';
export declare class UserDTO {
    username: string;
    password: string;
}
export declare class UserDTOFull extends UserDTO {
    email: string;
}
export declare class UserRO {
    id: string;
    username: string;
    email: string;
    created: Date;
    token?: string;
    bookmarks?: IdeaEntity[];
    password?: string;
}
