import { BaseEntity } from 'typeorm';
import { UserRO } from './user.dto';
import { IdeaEntity } from '../idea/idea.entity';
export declare class UserEntity extends BaseEntity {
    id: string;
    created: Date;
    username: string;
    email: string;
    password: string;
    salt: string;
    ideas: IdeaEntity[];
    bookmarks: IdeaEntity[];
    toResponseObject(showToken?: boolean): UserRO;
    comparePassword(attempt: string): Promise<boolean>;
    validatePassword(pass: string): Promise<boolean>;
}
