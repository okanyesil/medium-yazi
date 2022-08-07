import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.model';

@Injectable()
export class UserService {


    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

    async createUser(user: {email: string; password: string}) {
        const users = await this.userRepository.find({
            where: [
                {email: user.email}
            ]
        })

        if(users.length) throw new BadRequestException('This user already in use');

        const createUser = this.userRepository.create(user);
        return this.userRepository.save(createUser);
    }

    async findUser(user: {email:string; password:string}) {
        const findUser = await this.userRepository.findOne({
            where: [
                {email: user.email}
            ]
        });

        // if(!findUser) throw new NotFoundException('Check your password/email');
        return findUser;
    }
}
