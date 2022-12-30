import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateProcessDto } from './create-process.dto';

export class UpdateProcessDto extends PartialType(CreateProcessDto) {
    @IsNotEmpty()
    @IsString()
    dpoId:string;

    @IsNotEmpty()
    @IsString()
    operator?: string;

    @IsNotEmpty()
    @IsString()
    dataFlow?: string;

    @IsNotEmpty()
    @IsString()
    controller?: string;

    @IsNotEmpty()
    @IsString()
    employeeSector?: string;
}
