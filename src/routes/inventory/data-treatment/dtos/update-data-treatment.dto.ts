import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateDataTreatmentDto } from './create-data-treatment.dto';

export class UpdateDataTreatmentDto extends PartialType(CreateDataTreatmentDto) {
    @IsNotEmpty()
    @IsString()
    id:string;

    @IsNotEmpty()
    @IsString()
    invtId:string;
}
