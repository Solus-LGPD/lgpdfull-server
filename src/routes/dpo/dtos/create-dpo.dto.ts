import { 
    IsNotEmpty, 
    IsEmail, 
    IsOptional,
    IsString,
} from "class-validator";

export class CreateDpoDto {

    @IsNotEmpty()
    @IsString()
    userId:string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    socialName: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;
}
