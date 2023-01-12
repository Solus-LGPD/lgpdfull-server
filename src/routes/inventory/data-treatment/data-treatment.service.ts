import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDataTreatmentDto } from './dtos/create-data-treatment.dto';
import { UpdateDataTreatmentDto } from './dtos/update-data-treatment.dto';

@Injectable()
export class DataTreatmentService {
  constructor(
    private readonly prisma : PrismaService
  ){}

  public async create(createDataTreatmentDto: CreateDataTreatmentDto) {
    const data = {
      ...createDataTreatmentDto
    }

    const createdDataTreatment = await this.prisma.dataTreatmentInfo.create({
      data: {
        invt_id: data.invtId,
        frequency: data.frequency,
        quantity: data.quantity,
        category_info: data.categoryInfo,
        data_under_age: data.dataUnderAge,
        data_vulnerable_group: data.dataVulnerableGroup
      }
    });

    return createdDataTreatment;
  }

  public async update(updateDataTreatmentDto: UpdateDataTreatmentDto) {
    const data = {
      ...updateDataTreatmentDto
    }

    const now = new Date();


    await this.prisma.dataTreatmentInfo.update({
      where: {
        id: data.id
      },
      data: {
        frequency: data.frequency || undefined,
        quantity: data.quantity || undefined,
        category_info: data.categoryInfo || undefined,
        data_under_age: data.dataUnderAge || undefined,
        data_vulnerable_group: data.dataVulnerableGroup || undefined
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
