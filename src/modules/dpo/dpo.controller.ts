import { Controller, Get, Post, Body, Patch } from '@nestjs/common';
import { DpoService } from './dpo.service';
import { CreateDpoDto } from './dtos/create-dpo.dto';
import { UpdateDpoDto } from './dtos/update-dpo.dto';

@Controller('dpo')
export class DpoController {
  constructor(private readonly dpoService: DpoService) {}

  @Post('register')
  create(@Body() createDpoDto: CreateDpoDto) {
    return this.dpoService.create(createDpoDto);
  }

  @Get('all')
  findAll() {
    return this.dpoService.findAll();
  }

  @Patch('email')
  UpdateEmail(@Body() updateDpoDto: UpdateDpoDto){
    return this.dpoService.updateEmail(updateDpoDto);
  }
}
