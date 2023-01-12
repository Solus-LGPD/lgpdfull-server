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
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    actual?: string;
}
