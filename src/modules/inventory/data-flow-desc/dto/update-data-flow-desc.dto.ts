import { PartialType } from '@nestjs/mapped-types';
import { CreateDataFlowDescDto } from './create-data-flow-desc.dto';

export class UpdateDataFlowDescDto extends PartialType(CreateDataFlowDescDto) {}
