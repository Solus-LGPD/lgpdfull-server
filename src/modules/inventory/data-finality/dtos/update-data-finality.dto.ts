import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateDataFinalityDto } from './create-data-finality.dto';

export class UpdateDataFinalityDto extends PartialType(CreateDataFinalityDto) {
    @IsNotEmpty()
    @IsString()
    id:string;

    @IsNotEmpty()
    @IsString()
    invtId:string;
}
