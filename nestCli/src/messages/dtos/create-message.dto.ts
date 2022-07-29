import {IsString, IsNotEmpty, IsEmail} from 'class-validator';
//DTO - Data Transfer Object

export class CreateMessageDto {

    @IsString()
    @IsNotEmpty()
    message: string;
    


}