import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.model';
import { AuthService } from './auth/service/auth.service';
import { UserService } from './user/services/user.service';

@Module({
  imports: [UserModule, AuthModule,
  TypeOrmModule.forRoot({
    type:'sqlite',
    database: 'db.auth.sqlite',
    entities: [User],
    synchronize: true
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
