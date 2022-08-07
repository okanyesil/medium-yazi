import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.model';
import { UserService } from './services/user.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([User])
    ],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}