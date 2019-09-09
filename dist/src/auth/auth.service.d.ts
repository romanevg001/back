import { UserRepository } from '../user/user.repository';
import { UserDTOFull, UserDTO } from '../user/user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly jwtService;
    private userRepository;
    constructor(jwtService: JwtService, userRepository: UserRepository);
    signUp(authCredentalsDTO: UserDTOFull): Promise<void>;
    signIn(authCredentalsDTO: UserDTO): Promise<{
        accessToken: string;
    }>;
}
