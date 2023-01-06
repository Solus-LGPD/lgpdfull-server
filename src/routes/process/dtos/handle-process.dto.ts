import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateProcessDto } from './create-process.dto';

export class HandleProcessDto extends PartialType(CreateProcessDto) {
    @IsNotEmpty()
    @IsString()
    id:string;
}