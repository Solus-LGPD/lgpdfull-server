import { Module } from '@nestjs/common';
import { PersonalDataCategoryService } from './personal-data-category.service';
import { PersonalDataCategoryController } from './personal-data-category.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PersonalDataCategoryController],
  providers: [PersonalDataCategoryService, PrismaService]
})
export class PersonalDataCategoryModule {}
