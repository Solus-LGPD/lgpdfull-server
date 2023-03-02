import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { MappingService } from '../../../routes/data-mapping/mapping.service';
import { CreateMappingDto } from '../dtos/create-mapping.dto';
import { UpdateMappingDto } from '../../../routes/data-mapping/dtos/update-mapping.dto';
import { FindMappingDto } from '../../../routes/data-mapping/dtos/find-mapping.dto';

@Controller('mapping')
export class MappingController {
  constructor(private readonly mappingService: MappingService) {}

  @Post('register')
  create(@Body() createMappingDto: CreateMappingDto) {
    return this.mappingService.create(createMappingDto);
  }

  @Post('all')
  findAll(@Body() findMappingDto: FindMappingDto) {
    return this.mappingService.findAll(findMappingDto);
  }

  @Post('one')
  findOne(@Body() updateMappingDto: UpdateMappingDto) {
    return this.mappingService.findOne(updateMappingDto);
  }

  @Put('update')
  update(@Body() updateMappingDto: UpdateMappingDto) {
    return this.mappingService.update(updateMappingDto);
  }

  @Delete('remove')
  remove(@Body() updateMappingDto: UpdateMappingDto) {
    return this.mappingService.remove(updateMappingDto);
  }
}
