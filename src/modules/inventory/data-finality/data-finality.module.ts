import { Module } from '@nestjs/common';
import { DataFinalityService } from './data-finality.service';
import { DataFinalityController } from './data-finality.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DataFinalityController],
  providers: [DataFinalityService, PrismaService]
})
export class DataFinalityModule {}
