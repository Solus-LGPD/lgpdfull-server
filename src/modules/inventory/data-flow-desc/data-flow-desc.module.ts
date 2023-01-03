import { Module } from '@nestjs/common';
import { DataFlowDescService } from './data-flow-desc.service';
import { DataFlowDescController } from './data-flow-desc.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DataFlowDescController],
  providers: [DataFlowDescService, PrismaService]
})
export class DataFlowDescModule {}
