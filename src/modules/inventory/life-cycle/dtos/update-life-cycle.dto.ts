import { PartialType } from '@nestjs/mapped-types';
import { CreateLifeCycleDto } from './create-life-cycle.dto';
import { 
    IsNotEmpty, 
    IsNumber, 
    IsString
} from "class-validator";

export class UpdateLifeCycleDto extends PartialType(CreateLifeCycleDto) {
    @IsNotEmpty()
    @IsNumber()
    id:number;

    @IsNotEmpty()
    @IsString()
    invtId:string;
}
