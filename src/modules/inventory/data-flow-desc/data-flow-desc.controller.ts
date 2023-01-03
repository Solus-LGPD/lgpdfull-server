import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DataFlowDescService } from './data-flow-desc.service';
import { CreateDataFlowDescDto } from './dto/create-data-flow-desc.dto';
import { UpdateDataFlowDescDto } from './dto/update-data-flow-desc.dto';

@Controller('data-flow-desc')
export class DataFlowDescController {
  constructor(private readonly dataFlowDescService: DataFlowDescService) {}

  @Post()
  create(@Body() createDataFlowDescDto: CreateDataFlowDescDto) {
    return this.dataFlowDescService.create(createDataFlowDescDto);
  }

  @Get()
  findAll() {
    return this.dataFlowDescService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dataFlowDescService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDataFlowDescDto: UpdateDataFlowDescDto) {
    return this.dataFlowDescService.update(+id, updateDataFlowDescDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dataFlowDescService.remove(+id);
  }
}
