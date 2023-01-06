import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpStatus, HttpCode } from '@nestjs/common';
import { ProcessService } from './process.service';
import { CreateProcessDto } from './dtos/create-process.dto';
import { FindProcessDto } from './dtos/find-process.dto';
import { HandleProcessDto } from './dtos/handle-process.dto';

@Controller('process')
export class ProcessController {
  constructor(private readonly processService: ProcessService) {}

  @Post('register')
  create(@Body() createProcessDto: CreateProcessDto) {
    return this.processService.create(createProcessDto);
  }

  @Post('all')
  @HttpCode(HttpStatus.OK)
  findAll(@Body() findProcessDto: FindProcessDto) {
    return this.processService.findAll(findProcessDto);
  }

  @Put('update')
  update(@Body() updateProcessDto: HandleProcessDto){
    return this.processService.update(updateProcessDto);
  }

  @Delete('delete')
  delete(@Body() deleteProcessDto: HandleProcessDto){
    return this.processService.remove(deleteProcessDto);
  }
}
