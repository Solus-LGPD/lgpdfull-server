import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { 
    IsNotEmpty, 
    IsString,
    MinLength,
    MaxLength,
    Matches,
} from "class-validator";

export class UpdatePassDto extends PartialType(CreateUserDto) {
    @IsNotEmpty()
    @IsString()
    id:string;
   
    @IsString()
    pass:string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message: 'password too weak',
    })
    newPass:string;
}