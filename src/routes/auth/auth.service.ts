import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '../user/entities/user.entity';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ){}

    login(user: User): UserToken {
        const payload: UserPayload = {
            sub: user.id,
            email: user.email,
            firstName: user.firstName
        };

        const jwtToken = this.jwtService.sign(payload);

        return {
            acessToken: jwtToken,
            sub: payload.sub,
            ...user
        }
    }

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

        throw new Error('Email ou senha estão incorretos.');
    }
}
