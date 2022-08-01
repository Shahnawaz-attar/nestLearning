import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(email: string, password: string): Promise<User>;
    findAll(): Promise<User[]>;
    delete(id: number): Promise<void>;
    update(id: number, attrs: any): Promise<User>;
    findOne(id: any): Promise<User>;
    findOneByEmail(email: any): Promise<User>;
    findAllusers(email: any): Promise<User[]>;
}
