import { PartialType } from '@nestjs/mapped-types';
import { CreateSectorDto } from './create-sector.dto';
import { 
    IsNotEmpty, 
    IsString,
} from "class-validator";

export class UpdateSectorDto extends PartialType(CreateSectorDto) {
    @IsNotEmpty()
    @IsString()
    id?: string
}
