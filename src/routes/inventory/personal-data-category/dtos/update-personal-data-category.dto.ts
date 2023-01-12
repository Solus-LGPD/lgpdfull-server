import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreatePersonalDataCategoryDto } from './create-personal-data-category.dto';

export class UpdatePersonalDataCategoryDto extends PartialType(CreatePersonalDataCategoryDto) {
    @IsNotEmpty()
    @IsString()
    id:string;

    @IsNotEmpty()
    @IsString()
    invtId:string;
}
