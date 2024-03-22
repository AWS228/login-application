// src/registration.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('register')
export class RegistrationController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async register(@Body('username') username: string, @Body('password') password: string) {
        return this.userService.createUser(username, password);
    }
}
