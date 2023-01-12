import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePersonalDataCategoryDto } from './dtos/create-personal-data-category.dto';
import { UpdatePersonalDataCategoryDto } from './dtos/update-personal-data-category.dto';

@Injectable()
export class PersonalDataCategoryService {
  constructor(
    private readonly prisma: PrismaService
  ){}

  public async create(createPersonalDataCategoryDto: CreatePersonalDataCategoryDto) {
    const data = {
      ...createPersonalDataCategoryDto
    }

    const createdPersonalDataCategory = await this.prisma.personalDataCategory.create({
      data: {
        invt_id: data.invtId,
        personal_data: data.personalData || undefined,
        financial_data: data.financialData || undefined,
        characater_data: data.characaterData || undefined,
        habits_data: data.habitsData || undefined,
        psicological_data: data.psicologicalData || undefined,
        family_data: data.familyData || undefined,
        leisure_data: data.leisureData || undefined,
        association_data: data.associationData || undefined,
        legal_data: data.legalData || undefined,
        consunption_data: data.consunptionData || undefined,
        residential_data: data.residentialData || undefined,
        education_data: data.educationData || undefined
      }
    });

    return createdPersonalDataCategory;
  }

  public async update(updatePersonalDataCategoryDto: UpdatePersonalDataCategoryDto) {
    const data = {
      ...updatePersonalDataCategoryDto
    }

    const now = new Date();


    await this.prisma.personalDataCategory.update({
      where: {
        id: data.id
      },
      data: {
        personal_data: data.personalData || undefined,
        financial_data: data.financialData || undefined,
        characater_data: data.characaterData || undefined,
        habits_data: data.habitsData || undefined,
        psicological_data: data.psicologicalData || undefined,
        family_data: data.familyData || undefined,
        leisure_data: data.leisureData || undefined,
        association_data: data.associationData || undefined,
        legal_data: data.legalData || undefined,
        consunption_data: data.consunptionData || undefined,
        residential_data: data.residentialData || undefined,
        education_data: data.educationData || undefined
      }
    });
    
    await this.prisma.inventory.update({
      where: {
        id: data.invtId
      },
      data: {
        updated_at: new Date(now.toLocaleString())
      }
    })

    return {
      msg: 'Updated'
    };
  }
}
