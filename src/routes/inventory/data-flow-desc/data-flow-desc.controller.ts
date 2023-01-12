import { Controller, Put, Post, Body, Patch, Param } from '@nestjs/common';
import { DataFlowDescService } from './data-flow-desc.service';
import { CreateDataFlowDescDto } from './dtos/create-data-flow-desc.dto';
import { UpdateDataFlowDescDto } from './dtos/update-data-flow-desc.dto';

@Controller('data-flow-desc')
export class DataFlowDescController {
  constructor(private readonly dataFlowDescService: DataFlowDescService) {}

  @Post('register')
  create(@Body() createDataFlowDescDto: CreateDataFlowDescDto) {
    return this.dataFlowDescService.create(createDataFlowDescDto);
  }

  @Put('update')
  update(@Body() updateDataFlowDescDto: UpdateDataFlowDescDto) {
    return this.dataFlowDescService.update(updateDataFlowDescDto);
  }
}
