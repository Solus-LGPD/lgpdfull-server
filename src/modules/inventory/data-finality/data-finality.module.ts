import { Module } from '@nestjs/common';
import { DataFinalityService } from './data-finality.service';
import { DataFinalityController } from './data-finality.controller';

@Module({
  controllers: [DataFinalityController],
  providers: [DataFinalityService]
})
export class DataFinalityModule {}
