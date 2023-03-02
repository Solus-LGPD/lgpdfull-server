import { PartialType } from '@nestjs/mapped-types';
import { CreateSectorDto } from './create-sector.dto';
import { 
    IsNotEmpty, 
    IsOptional, 
    IsString,
} from "class-validator";

export class UpdateSectorDto extends PartialType(CreateSectorDto) {
    @IsNotEmpty()
    @IsOptional()
    @IsString()
    id: string
}
