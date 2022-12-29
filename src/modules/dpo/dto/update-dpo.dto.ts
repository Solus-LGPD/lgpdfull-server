import { PartialType } from '@nestjs/mapped-types';
import { CreateDpoDto } from './create-dpo.dto';

export class UpdateDpoDto extends PartialType(CreateDpoDto) {}
