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
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsString()
    companyName:string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email:string;

    @IsOptional()
    @IsBoolean()
    isAdmin: boolean;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message: 'password too weak',
    })
    pass:string;

}
