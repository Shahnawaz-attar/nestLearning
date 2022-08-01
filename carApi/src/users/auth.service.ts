import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UsersService } from "./users.service";
import { randomBytes,scrypt as _scrypt } from "crypto";
import { promisify } from "util";

const scrypt = promisify(_scrypt);


@Injectable()
export default class AuthService {
    constructor(private usersService: UsersService) {}

    async signUp(email: string, password: string) {

        // see if user exists
        const emailExist = await this.usersService.findOneByEmail(email);
        if (emailExist) {
            throw new BadRequestException("Email already exists");
        }


        // Hash password
        const hashedPassword = await this.hashPassword(password);


        // Create user and save to db
        const user = await this.usersService.create(email, hashedPassword);



        // Return user 
        return user;
        
    }


    //signIn
    async signIn(email: string, password: string) {
        // see if user exists
        const user = await this.usersService.findOneByEmail(email);
        if (!user) {
            throw new NotFoundException("User not found");
        }

        // Check password
        const hashedPassword = user.password;
        const [salt, hashedPasswordFromDb] = hashedPassword.split("+");
        const hashedPasswordFromUser = (await scrypt(password, salt, 32)) as Buffer;
        if (hashedPasswordFromDb !== hashedPasswordFromUser.toString("hex")) {
            throw new BadRequestException("Invalid password");
        }

        // Return user
        return user;
        

    }





    //hashPassword
    async hashPassword(password: string) {
        const salt = randomBytes(8).toString("hex");
        const hashedPassword = (await scrypt(password, salt, 32)) as Buffer;
        return salt + "+" + hashedPassword.toString("hex");
    }

}

