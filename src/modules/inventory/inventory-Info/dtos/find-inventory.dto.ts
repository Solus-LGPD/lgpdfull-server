import { PartialType } from '@nestjs/mapped-types';
import { CreateInventoryDto } from './create-inventory.dto';
import { 
    IsNotEmpty,
    IsString,
} from "class-validator";

export class FindInventoryDto extends PartialType(CreateInventoryDto) {
    @IsNotEmpty()
    @IsString()
    userId: string;
}