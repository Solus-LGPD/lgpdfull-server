import { Controller, Put, Post, Body } from '@nestjs/common';
import { PersonalDataCategoryService } from './personal-data-category.service';
import { CreatePersonalDataCategoryDto } from './dtos/create-personal-data-category.dto';
import { UpdatePersonalDataCategoryDto } from './dtos/update-personal-data-category.dto';

@Controller('personal-data-category')
export class PersonalDataCategoryController {
  constructor(private readonly personalDataCategoryService: PersonalDataCategoryService) {}

  @Post('register')
  create(@Body() createPersonalDataCategoryDto: CreatePersonalDataCategoryDto) {
    return this.personalDataCategoryService.create(createPersonalDataCategoryDto);
  }

  @Put('update')
  update(@Body() updatePersonalDataCategoryDto: UpdatePersonalDataCategoryDto) {
    return this.personalDataCategoryService.update(updatePersonalDataCategoryDto);
  }
}
