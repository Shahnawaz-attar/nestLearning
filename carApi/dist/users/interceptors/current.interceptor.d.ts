import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';
export declare class CurrentInterceptor implements NestInterceptor {
    private usersService;
    constructor(usersService: UsersService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>>;
}
