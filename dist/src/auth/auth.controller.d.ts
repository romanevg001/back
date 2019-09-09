import { UserDTOFull, UserDTO } from '../user/user.dto';
import { AuthService } from './auth.service';
import { UserEntity } from 'src/user/user.entity';
export interface Payload {
    username: string;
}
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCredentalsDTO: UserDTOFull): Promise<void>;
    signIn(authCredentalsDTO: UserDTO): Promise<{
        accessToken: string;
    }>;
    test(user: UserEntity): void;
}
