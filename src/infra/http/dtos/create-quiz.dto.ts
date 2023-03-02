import { 
    IsNotEmpty, 
    IsEmail, 
    IsString,
    IsBoolean,
} from "class-validator";

export class CreateQuizDto {
    
    @IsNotEmpty()
    @IsString()
    result: string;

    @IsNotEmpty()
    @IsString()
    answers: string;

    @IsNotEmpty()
    @IsString()
    userId: string;
}
