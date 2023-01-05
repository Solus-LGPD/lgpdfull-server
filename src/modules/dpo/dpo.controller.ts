import { Controller, Put, Post, Body } from '@nestjs/common';
import { DpoService } from './dpo.service';
import { CreateDpoDto } from './dtos/create-dpo.dto';
import { UpdateDpoDto } from './dtos/update-dpo.dto';
import { FindDpoDto } from './dtos/find-dpo.dto';

@Controller('dpo')
export class DpoController {
  constructor(private readonly dpoService: DpoService) {}

  @Post('register')
  create(@Body() createDpoDto: CreateDpoDto) {
    return this.dpoService.create(createDpoDto);
  }

  @Post('all')
  findAll(@Body() findDpoDto: FindDpoDto) {
    return this.dpoService.findAll(findDpoDto);
  }

  @Put('update')
  UpdateEmail(@Body() updateDpoDto: UpdateDpoDto){
    return this.dpoService.updateEmail(updateDpoDto);
  }
}
