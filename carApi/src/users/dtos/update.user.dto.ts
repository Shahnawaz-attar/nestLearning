import { IsEmail,IsString, IsOptional, IsNotEmpty } from "class-validator";

export default class UpdateUserDto { 
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  @IsOptional()
  email: string;
}