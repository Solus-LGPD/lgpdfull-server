import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateDataShareDto } from './create-data-share.dto';

export class UpdateDataShareDto extends PartialType(CreateDataShareDto) {
    @IsNotEmpty()
    @IsString()
    id:string;

    @IsNotEmpty()
    @IsString()
    invtId:string;
}
