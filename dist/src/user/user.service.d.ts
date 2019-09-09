import { UserEntity } from './user.entity';
import { UserDTO, UserRO } from './user.dto';
import { Repository, DeleteResult } from 'typeorm';
import { LoginDTO } from '../auth/auth.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    showAll(page?: number): Promise<UserRO[]>;
    read(username: string, isShowPassword?: boolean): Promise<UserRO>;
    login(data: UserDTO): Promise<UserRO>;
    register(data: UserDTO): Promise<UserRO>;
    update(id: string, data: UserDTO): Promise<UserRO>;
    find(): Promise<UserEntity[]>;
    findByLogin(userDTO: LoginDTO): Promise<UserRO>;
    findByPayload(payload: any): Promise<UserEntity>;
    sanitizeUser(user: UserDTO): UserRO;
    deleteUser(userId: string): Promise<DeleteResult>;
}
