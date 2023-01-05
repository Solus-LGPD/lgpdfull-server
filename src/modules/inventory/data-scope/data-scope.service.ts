import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDataScopeDto } from './dto/create-data-scope.dto';
import { UpdateDataScopeDto } from './dto/update-data-scope.dto';

@Injectable()
export class DataScopeService {
  constructor(
    private readonly prisma: PrismaService
  ){}

  public async create(createDataScopeDto: CreateDataScopeDto) {
    const data = {
      ...createDataScopeDto
    }

    const createdDataFlowDesc = await this.prisma.dataScope.create({
      data: {
        invt_id: data.invtId,
        geographic_area: data.geographic_area,
        source: data.source
      }
    });

    return createdDataFlowDesc;
  }

  public async update(updateDataScopeDto: UpdateDataScopeDto) {
    const data = {
      ...updateDataScopeDto
    }

    const now = new Date();

    await this.prisma.dataScope.update({
      where: {
        id: data.id
      },
      data: {
        geographic_area: data.geographic_area || undefined,
        source: data.source || undefined
      }
    });
    
    await this.prisma.inventory.update({
      where: {
        id: data.invtId
      },
      data: {
        updated_at: now.toLocaleString()
      }
    })

    return {
      msg: 'Process Updated'
    };
  }
}
