import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import  AuthService from './auth.service';
import { CurrentInterceptor } from './interceptors/current.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UsersController],
  providers: [UsersService , AuthService , {
    provide: APP_INTERCEPTOR,
    useClass: CurrentInterceptor,
  }],
})
export class UsersModule {}
