import { Controller, Put, Post, Body, } from '@nestjs/common';
import { DataShareService } from './data-share.service';
import { CreateDataShareDto } from './dtos/create-data-share.dto';
import { UpdateDataShareDto } from './dtos/update-data-share.dto';

@Controller('data-share')
export class DataShareController {
  constructor(private readonly dataShareService: DataShareService) {}

  @Post('register')
  create(@Body() createDataShareDto: CreateDataShareDto) {
    return this.dataShareService.create(createDataShareDto);
  }

  @Put('update')
  update(@Body() updateDataShareDto: UpdateDataShareDto) {
    return this.dataShareService.update(updateDataShareDto);
  }
}
