import { Controller, Post, Body, Delete, Put } from '@nestjs/common';
import { SectorService } from '../../../app/services/sector.service';
import { CreateSectorDto } from '../dtos/create-sector.dto';
import { UpdateSectorDto } from '../../../routes/sector/dtos/update-sector.dto';

@Controller('sector')
export class SectorController {
  constructor(private readonly sectorService: SectorService) {}

  @Post('register')
  create(@Body() createSectorDto: CreateSectorDto) {
    return this.sectorService.create(createSectorDto);
  }

  @Post('all')
  findAll(@Body() updateSectorDto: UpdateSectorDto) {
    return this.sectorService.findAll(updateSectorDto);
  }

  @Post('one')
  findOne(@Body() updateSectorDto: UpdateSectorDto) {
    return this.sectorService.findOne(updateSectorDto);
  }

  @Put('update')
  update(@Body() updateSectorDto: UpdateSectorDto) {
    return this.sectorService.update( updateSectorDto);
  }

  @Delete('remove')
  remove(@Body() updateSectorDto: UpdateSectorDto) {
    return this.sectorService.remove(updateSectorDto);
  }
}
