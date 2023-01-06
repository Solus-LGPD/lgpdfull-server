import { Module } from '@nestjs/common';
import { DpoService } from './dpo.service';
import { DpoController } from './dpo.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DpoController],
  providers: [DpoService, PrismaService]
})
export class DpoModule {}
