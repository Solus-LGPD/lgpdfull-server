import { PartialType } from '@nestjs/mapped-types';
import { CreateInventoryDto } from './create-inventory.dto';
import { 
    IsNotEmpty,
    IsString,
} from "class-validator";

export class HandleInventoryDto extends PartialType(CreateInventoryDto) {
    @IsNotEmpty()
    @IsString()
    id:string;
}
