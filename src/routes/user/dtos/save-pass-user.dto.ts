import { 
    IsNotEmpty, 
    IsEmail, 
    IsString,
} from "class-validator";


export class SaveDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email:string;
}