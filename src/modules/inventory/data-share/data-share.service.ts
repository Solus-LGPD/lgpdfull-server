import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDataShareDto } from './dtos/create-data-share.dto';
import { UpdateDataShareDto } from './dtos/update-data-share.dto';

@Injectable()
export class DataShareService {
  constructor(
    private readonly prisma: PrismaService
  ){}

  public async create(createDataShareDto: CreateDataShareDto) {
    const data = {
      ...createDataShareDto
    }

    const createdDataShare = await this.prisma.dataShare.create({
      data: {
        invt_id: data.invtId,
        name: data.name,
        description: data.description
      }
    });

    return createdDataShare;  }

  public async update(updateDataShareDto: UpdateDataShareDto) {
    const data = {
      ...updateDataShareDto
    }

    const now = new Date();


    await this.prisma.dataShare.update({
      where: {
        id: data.id
      },
      data: {
        name: data.name || undefined,
        description: data.description || undefined
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
