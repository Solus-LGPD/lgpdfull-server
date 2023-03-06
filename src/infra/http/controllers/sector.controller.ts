import { Controller, Post, Body, Delete, Put, Get, Param, HttpCode } from '@nestjs/common';
import { SectorService } from '../../../app/services/sector.service';
import { CreateSectorDto } from '../dtos/create-sector.dto';
import { UpdateSectorDto } from '../dtos/update-sector.dto';

@Controller('sector')
export class SectorController {
  constructor(private readonly sectorService: SectorService) {}

  @Post()
  create(@Body() createSectorDto: CreateSectorDto) {
    return this.sectorService.create(createSectorDto);
  }

  
  @Get('all')
  findAll(@Param('id') /*userId*/ id: string ) {
    return this.sectorService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sectorService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSectorDto: UpdateSectorDto) {
    return this.sectorService.update( id, updateSectorDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.sectorService.remove(id);
  }
}