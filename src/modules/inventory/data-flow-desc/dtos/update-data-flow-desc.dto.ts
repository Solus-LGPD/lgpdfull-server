import { PartialType } from '@nestjs/mapped-types';
import { CreateDataFlowDescDto } from './create-data-flow-desc.dto';
import { 
    IsNotEmpty, 
    IsNumber, 
    IsString
} from "class-validator";

export class UpdateDataFlowDescDto extends PartialType(CreateDataFlowDescDto) {
    @IsNotEmpty()
    @IsNumber()
    id:number;

    @IsNotEmpty()
    @IsString()
    invtId:string;
}
