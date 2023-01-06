import { Controller, Put, Post, Body, Patch} from '@nestjs/common';
import { DataScopeService } from './data-scope.service';
import { CreateDataScopeDto } from './dto/create-data-scope.dto';
import { UpdateDataScopeDto } from './dto/update-data-scope.dto';

@Controller('data-scope')
export class DataScopeController {
  constructor(private readonly dataScopeService: DataScopeService) {}

  @Post('register')
  create(@Body() createDataScopeDto: CreateDataScopeDto) {
    return this.dataScopeService.create(createDataScopeDto);
  }

  @Patch('update')
  update(@Body() updateDataScopeDto: UpdateDataScopeDto) {
    return this.dataScopeService.update(updateDataScopeDto);
  }
}
