import { Strategy } from 'passport-jwt';
import { JwtService } from '@nestjs/jwt';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private jwtService;
    constructor(jwtService: JwtService);
    validate(payload: any): Promise<{
        userId: any;
        username: any;
    }>;
}
export {};
