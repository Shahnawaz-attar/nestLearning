import { CreateUserDto } from './dtos/create-user.dto';
import UpdateUserDto from './dtos/update.user.dto';
import { UsersService } from './users.service';
import AuthService from './auth.service';
import { User } from './user.entity';
export declare class UsersController {
    private usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
    CreateUser(body: CreateUserDto, session: any): Promise<User>;
    signIn(body: CreateUserDto, session: any): Promise<User>;
    findAll(): Promise<User[]>;
    delete(id: number): Promise<void>;
    update(id: number, body: CreateUserDto): Promise<User>;
    findOne(id: number): Promise<User>;
    findAllusers(email: string): Promise<User[]>;
    patch(id: number, body: UpdateUserDto): Promise<User>;
    setColor(color: string, session: any): string;
    getColor(session: any): any;
    signOut(session: any): string;
    getCurrentUser(user: User): User;
}
