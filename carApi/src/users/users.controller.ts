import { Controller, Post, Body, Get, Delete, Param, Put, Query, Patch, UseInterceptors, Session,UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import UpdateUserDto from './dtos/update.user.dto';
import { UsersService } from './users.service';
import { Serialize, } from '../Interceptors/serialise.interceptors';
import { UserDto } from './dtos/user.dto';
import AuthService from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import {CurrentInterceptor} from './interceptors/current.interceptor';
import { User } from './user.entity';
import { AuthGuard } from '../auth/auth.guard';

// serialising All controllers
@Serialize(UserDto)
@Controller('auth')
export class UsersController {

    constructor(
        private usersService: UsersService,
        private authService: AuthService,

    ) { }

    @Post('/signup')
    async CreateUser(@Body() body: CreateUserDto, @Session() session: any) {
        const user = await this.authService.signUp(body.email, body.password);
        session.userId = user.id;
        return user;
         
    }


    //signIn
    @Post('/signin')
    async signIn(@Body() body: CreateUserDto, @Session() session: any) {
        const user = await this.authService.signIn(body.email, body.password);
        session.userId = user.id;
        return user;
    }

    //findAll
    @Get('/getAll')
    findAll() {
        return this.usersService.findAll();
    }


    //delete
    @Delete('/delete/:id')
    delete(@Param('id') id: number) {
        return this.usersService.delete(id);
    }

    //update
    @Put('/update/:id')
    update(@Param('id') id: number, @Body() body: CreateUserDto) {
        return this.usersService.update(id, body);
    }

    //findOne
    // @UseInterceptors(new SerialiseInterceptor(UserDto))

    @Get('/getOne/:id')
    findOne(@Param('id') id: number) {
        return this.usersService.findOne(id);
    }

    //findAllusers
    @Get()
    findAllusers(@Query() email: string) {
        return this.usersService.findAllusers(email);
    }

    //patch
    @Patch('/patch/:id')
    patch(@Param('id') id: number, @Body() body: UpdateUserDto) {
        return this.usersService.update(id, body);
    }


    @Get('/colors/:color')
    setColor(@Param('color') color: string, @Session() session: any) {
        session.color = color;
        return 'Color is set to ' + color;

    }

    @Get('/colors')
    getColor(@Session() session: any) {
        return session.color;
    }

    // signOut
    @Post('/signout')
    signOut(@Session() session: any) {
        session.userId = null;
        return 'User is signed out';
    }

    // getCurrentUser
    @Get('/currentUser')
    @UseGuards(AuthGuard)
    getCurrentUser(@CurrentUser() user: User) {
        return user;
    }




}
