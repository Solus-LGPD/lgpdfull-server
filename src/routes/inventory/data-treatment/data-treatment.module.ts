import { Module } from '@nestjs/common';
import { DataTreatmentService } from './data-treatment.service';
import { DataTreatmentController } from './data-treatment.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DataTreatmentController],
  providers: [DataTreatmentService, PrismaService]
})
export class DataTreatmentModule {}
