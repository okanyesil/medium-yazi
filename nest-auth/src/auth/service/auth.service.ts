import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/services/user.service';
import { jwtConstants } from '../jwt/constants';

@Injectable()
export class AuthService {


    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}


    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findUser({email: email, password: password});
        if(user && user.password === password) {
            const {password, ...result} = user;
            return result;
        }
        return null;
    }

    async login(user:any) {
        const payload = {username: user.email, sub: user.id};
        return {
            access_token: this.jwtService.sign(payload, {secret: jwtConstants.secret}),
        }
    }
}
