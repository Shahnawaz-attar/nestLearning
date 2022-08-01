import { Injectable,NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {


    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    //create
    async create(email: string, password: string): Promise<User> {
        const user = new User();
        user.email = email;
        user.password = password;
        return await this.userRepository.save(user);
    }

    //find all
    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    //delete
    async delete(id: number): Promise<void> {
        const user = await this.userRepository.findOneBy({id});
        if (!user) {
            throw new NotFoundException('User not found');
        }
        await this.userRepository.remove(user);
    }

    //update
    async update(id: number, attrs: any) {
        const user = await this.userRepository.findOneBy({id});
        if (!user) {
            throw new NotFoundException('User not found');
        }
        Object.assign(user, attrs);
        return await this.userRepository.save(user);
    }

    //find one
    async findOne(id: any): Promise<User> {
        return await this.userRepository.findOneBy({id});
    }

    //findOneByEmail
    async findOneByEmail(email: any): Promise<User> {
        return await this.userRepository.findOneBy({email});
    }


    //findAllusers
    async findAllusers(email: any) {
        return await this.userRepository.find(email);
    } 
    
    


}
