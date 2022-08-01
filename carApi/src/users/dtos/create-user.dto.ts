
import {IsNotEmpty, IsString, IsEmail} from 'class-validator';
export class CreateUserDto {


    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}
