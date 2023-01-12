import { Controller, Put, Post, Body } from '@nestjs/common';
import { LifeCycleService } from './life-cycle.service';
import { CreateLifeCycleDto } from './dtos/create-life-cycle.dto';
import { UpdateLifeCycleDto } from './dtos/update-life-cycle.dto';

@Controller('life-cycle')
export class LifeCycleController {
  constructor(private readonly lifeCycleService: LifeCycleService) {}

  @Post('register')
  create(@Body() createLifeCycleDto: CreateLifeCycleDto) {
    return this.lifeCycleService.create(createLifeCycleDto);
  }

  @Put('update')
  update(@Body() updateLifeCycleDto: UpdateLifeCycleDto) {
    return this.lifeCycleService.update( updateLifeCycleDto);
  }
}
