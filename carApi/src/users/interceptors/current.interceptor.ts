import {
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    Injectable,
} from '@nestjs/common';

import { Observable } from 'rxjs';

import { UsersService } from '../users.service';


@Injectable()
export class CurrentInterceptor implements NestInterceptor {
    constructor(private usersService: UsersService) { }

    async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest();
        const useriD = request.session.userId;
        if (useriD) {
            const user = await this.usersService.findOne(useriD);
            request.user = user;
        }else{
            request.user = null;
        }
        return next.handle();
    }
}
