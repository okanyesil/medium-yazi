import { Repository } from 'typeorm';
import { User } from '../entity/user.model';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(user: {
        email: string;
        password: string;
    }): Promise<User>;
    signIn(user: {
        email: string;
        password: string;
    }): Promise<User>;
}
