import { Injectable } from "@nestjs/common";
import * as generator from 'generate-password';

@Injectable()
export class GeneratePasswordService{
    
    public generate(): string{
        const password = generator.generate({
            length: 8,
            numbers: true,
            symbols: false,
            strict: true
        });

        return password;
    }
}