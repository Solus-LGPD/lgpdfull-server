import { Module } from '@nestjs/common';
import { MappingService } from './mapping.service';
import { MappingController } from './mapping.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [MappingController],
  providers: [MappingService, PrismaService]
})
export class MappingModule {}
