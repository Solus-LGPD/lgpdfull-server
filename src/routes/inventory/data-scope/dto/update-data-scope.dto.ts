import { PartialType } from '@nestjs/mapped-types';
import { CreateDataScopeDto } from './create-data-scope.dto';
import { 
    IsNotEmpty, 
    IsNumber, 
    IsString
} from "class-validator";

export class UpdateDataScopeDto extends PartialType(CreateDataScopeDto) {
    @IsNotEmpty()
    @IsNumber()
    id:string;

    @IsNotEmpty()
    @IsString()
    invtId:string;
}
