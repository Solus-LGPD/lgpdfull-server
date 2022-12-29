import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DpoService } from './dpo.service';
import { CreateDpoDto } from './dto/create-dpo.dto';
import { UpdateDpoDto } from './dto/update-dpo.dto';

@Controller('dpo')
export class DpoController {
  constructor(private readonly dpoService: DpoService) {}

  @Post()
  create(@Body() createDpoDto: CreateDpoDto) {
    return this.dpoService.create(createDpoDto);
  }

  @Get()
  findAll() {
    return this.dpoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dpoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDpoDto: UpdateDpoDto) {
    return this.dpoService.update(+id, updateDpoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dpoService.remove(+id);
  }
}
