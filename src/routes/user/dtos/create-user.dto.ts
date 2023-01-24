import { 
    IsNotEmpty, 
    IsEmail, 
    IsOptional,
    IsString,
    IsBoolean,
    Matches,
    MinLength,
    MaxLength
} from "class-validator";

export class CreateUserDto {
    
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    socialName: string;

    @IsNotEmpty()
    @IsString()
    state: string;

    @IsNotEmpty()
    @IsString()
    companyName:string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email:string;
}
