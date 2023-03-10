import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { EncryptService } from "src/app/ports/encrypt-port.service";

@Injectable()
export class BcryptService implements EncryptService{
    
    public encryptPassword(password: string){
        return bcrypt.hash(password, 10);
    }

    public comparePasswords(pass: string, encryptedPass: string){
        return bcrypt.compare(pass, encryptedPass)
    }
}
