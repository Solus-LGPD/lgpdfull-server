import { Module } from '@nestjs/common';
import { DataShareService } from './data-share.service';
import { DataShareController } from './data-share.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DataShareController],
  providers: [DataShareService, PrismaService]
})
export class DataShareModule {}
