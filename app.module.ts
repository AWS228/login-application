// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { RegistrationController } from './registration.controller';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'test',
            entities: [User],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([User]),
    ],
    controllers: [RegistrationController],
    providers: [UserService],
})
export class AppModule {}
