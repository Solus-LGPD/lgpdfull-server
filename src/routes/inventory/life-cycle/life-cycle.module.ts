import { Module } from '@nestjs/common';
import { LifeCycleService } from './life-cycle.service';
import { LifeCycleController } from './life-cycle.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LifeCycleController],
  providers: [LifeCycleService, PrismaService]
})
export class LifeCycleModule {}
