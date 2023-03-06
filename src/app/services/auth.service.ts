import { Injectable } from '@nestjs/common';
import { UserPayload } from '../auth/models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from '../auth/models/UserToken';
import { UserEntity } from 'src/app/entities/user.entity';
import { UsersRepository } from 'src/infra/database/prisma/repositories/user.repository';
import { EncryptService } from 'src/app/adapters/encrypt.service';
import { ConflictError } from 'src/app/common/errors/types/ConflictError';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly repository: UsersRepository,
        private readonly encryptService: EncryptService
    ){}

    login(user: UserEntity): UserToken {
        const payload: UserPayload = {
            id: user.id,
            email: user.email,
            name: user.name,
            companyName: user.companyName
        };

        const jwtToken = this.jwtService.sign(payload);

        return {
            acessToken: jwtToken,
            id: payload.id,
            name: payload.name,
            companyName: payload.companyName
        }
    }

    async validateUser(email: string, pass: string) {
        const user = await this.repository.findByEmail(email);

        if(user){
            const isPassValid = await this.encryptService.comparePasswords(pass, user.pass);

            if(isPassValid){
                user.pass = undefined;
                return {
                    ...user,
                }
            }
        }

        throw new ConflictError('Email ou senha estão incorretos.');
    }
}
