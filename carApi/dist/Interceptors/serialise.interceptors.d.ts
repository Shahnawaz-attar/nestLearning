import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
interface ClassConstructor {
    new (...args: any[]): {};
}
export declare class SerialiseInterceptor implements NestInterceptor {
    private dto;
    constructor(dto: ClassConstructor);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
export declare const Serialize: (dto: ClassConstructor) => MethodDecorator & ClassDecorator;
export {};
