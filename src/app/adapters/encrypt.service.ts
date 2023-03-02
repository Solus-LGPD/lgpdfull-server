import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncryptService{
    
    public encryptPassword(password: string){
        return bcrypt.hash(password, 10);
    }

    public comparePasswords(pass: string, encryptedPass: string){
        return bcrypt.compare(pass, encryptedPass)
    }
}
