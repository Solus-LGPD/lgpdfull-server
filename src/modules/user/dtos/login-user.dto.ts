import { 
    IsNotEmpty, 
    IsEmail, 
    IsString,
} from "class-validator";


export class LoginUserDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @IsString()
    pass:string;
}