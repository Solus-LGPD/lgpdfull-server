import { Module } from "@nestjs/common";
import { EncryptService } from "src/app/ports/encrypt-port.service";
import { GeneratePassService } from "src/app/ports/generate-pass-port.service";
import { BcryptService } from "./bcrypt.service";
import { GeneratePasswordService } from "./generate-password.service";

@Module({
    providers:[
        {
            provide: EncryptService,
            useClass: BcryptService
        },        
        GeneratePasswordService
    ],
    exports: [
        EncryptService,
        GeneratePasswordService
    ]
  })
export class AdaptersModule {}
  