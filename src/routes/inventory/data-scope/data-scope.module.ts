import { Module } from '@nestjs/common';
import { DataScopeService } from './data-scope.service';
import { DataScopeController } from './data-scope.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DataScopeController],
  providers: [DataScopeService, PrismaService]
})
export class DataScopeModule {}
