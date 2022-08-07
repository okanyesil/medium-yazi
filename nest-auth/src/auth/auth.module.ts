import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { jwtConstants } from './jwt/constants';
import { JwtStrategy } from './jwt/jwt.strategy';
import { LocalStrategy } from './jwt/local.strategy';
import { AuthService } from './service/auth.service';

@Module({
    imports: [UserModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '15m'},
        })
    ],
    providers: [AuthService,LocalStrategy, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule {}
