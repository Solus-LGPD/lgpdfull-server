import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { 
    IsNotEmpty, 
    IsString
} from "class-validator";

export class DeleteUserDto extends PartialType(CreateUserDto) {
    @IsNotEmpty()
    @IsString()
    id:string;
}
