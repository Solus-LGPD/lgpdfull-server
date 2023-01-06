import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDataFinalityDto } from './dtos/create-data-finality.dto';
import { UpdateDataFinalityDto } from './dtos/update-data-finality.dto';

@Injectable()
export class DataFinalityService {
  constructor(
    private readonly prisma: PrismaService
  ){}

  public async create(createDataFinalityDto: CreateDataFinalityDto) {
    const data = {
      ...createDataFinalityDto
    }

    const createdDataFinality = await this.prisma.dataFinality.create({
      data: {
        invt_id: data.invtId,
        case: data.case,
        purpose: data.purpose,
        goals: data.goals,
        expected_profits: data.expected_profits,
        legal_forecast: data.legal_forecast
      }
    });

    return createdDataFinality;
  }

  public async update(updateDataFinalityDto: UpdateDataFinalityDto) {
    const data = {
      ...updateDataFinalityDto
    }

    const now = new Date();


    await this.prisma.dataFinality.update({
      where: {
        id: data.id
      },
      data: {
        case: data.case || undefined,
        purpose: data.purpose || undefined,
        goals: data.goals || undefined,
        expected_profits: data.expected_profits || undefined,
        legal_forecast: data.legal_forecast || undefined
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
      msg: 'Process Updated'
    };
  }
}
