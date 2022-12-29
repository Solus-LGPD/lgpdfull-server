import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { 
    IsNotEmpty, 
    IsEmail, 
    IsString,
} from "class-validator";


export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNotEmpty()
    @IsString()
    id:string;
   
    @IsString()
    @IsEmail()
    email:string;
}
