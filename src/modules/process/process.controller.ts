import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProcessService } from './process.service';
import { CreateProcessDto } from './dtos/create-process.dto';
import { UpdateProcessDto } from './dtos/update-process.dto';

@Controller('process')
export class ProcessController {
  constructor(private readonly processService: ProcessService) {}

  @Post('register')
  create(@Body() createProcessDto: CreateProcessDto) {
    return this.processService.create(createProcessDto);
  }

  @Post('all')
  findAll(@Body() updateProcessDto: UpdateProcessDto) {
    return this.processService.findAll();
  }

  @Put('dataFlow')
  update(@Body() updateProcessDto: UpdateProcessDto){
    return this.processService.update(updateProcessDto);
  }
}
