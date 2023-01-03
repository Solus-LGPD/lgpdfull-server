import { Controller, Put, Post, Body, } from '@nestjs/common';
import { DataFinalityService } from './data-finality.service';
import { CreateDataFinalityDto } from './dtos/create-data-finality.dto';
import { UpdateDataFinalityDto } from './dtos/update-data-finality.dto';

@Controller('data-finality')
export class DataFinalityController {
  constructor(private readonly dataFinalityService: DataFinalityService) {}

  @Post('register')
  create(@Body() createDataFinalityDto: CreateDataFinalityDto) {
    return this.dataFinalityService.create(createDataFinalityDto);
  }

  @Put('update')
  update(@Body() updateDataFinalityDto: UpdateDataFinalityDto) {
    return this.dataFinalityService.update(updateDataFinalityDto);
  }
}
