import { Controller, Put, Post, Body } from '@nestjs/common';
import { DataTreatmentService } from './data-treatment.service';
import { CreateDataTreatmentDto } from './dtos/create-data-treatment.dto';
import { UpdateDataTreatmentDto } from './dtos/update-data-treatment.dto';

@Controller('data-treatment')
export class DataTreatmentController {
  constructor(private readonly dataTreatmentService: DataTreatmentService) {}

  @Post('register')
  create(@Body() createDataTreatmentDto: CreateDataTreatmentDto) {
    return this.dataTreatmentService.create(createDataTreatmentDto);
  }

  @Put('update')
  update(@Body() updateDataTreatmentDto: UpdateDataTreatmentDto) {
    return this.dataTreatmentService.update(updateDataTreatmentDto);
  }
}
