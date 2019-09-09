import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDTOFull, UserDTO } from './user.dto';
export declare class UserRepository extends Repository<UserEntity> {
    signUp(authCredentalsDTO: UserDTOFull): Promise<void>;
    validateUserPassword(authCredentalsDTO: UserDTO): Promise<string>;
}
