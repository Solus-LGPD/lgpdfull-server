import { 
    IsNotEmpty, 
    IsEmail, 
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
    naturalPerson: boolean;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;
}
