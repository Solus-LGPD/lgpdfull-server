import { PartialType } from '@nestjs/mapped-types';
import { CreateMappingDto } from './create-mapping.dto';
import { 
    IsNotEmpty, 
    IsString
} from "class-validator";

export class FindMappingDto extends PartialType(CreateMappingDto) {
    @IsNotEmpty()
    @IsString()
    userId:string;
}