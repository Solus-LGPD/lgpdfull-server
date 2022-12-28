import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService){}

    async validateUser(email: string, pass: string) {
        const user = await this.userService.findByEmail(email);

        if(user){
            const isPassValid = await bcrypt.compare(pass, user.pass);

            if(isPassValid){
                user.pass = undefined;
                return {
                    ...user,
                }
            }
        }

        throw new Error('Email address or password is incorrect.');
    }
}
