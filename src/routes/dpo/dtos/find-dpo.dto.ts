import { PartialType } from '@nestjs/mapped-types';
import { CreateDpoDto } from './create-dpo.dto';
import { 
    IsNotEmpty, 
    IsString,
} from "class-validator";


export class FindDpoDto extends PartialType(CreateDpoDto) {
    @IsNotEmpty()
    @IsString()
    userId:string;
}