import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDataFlowDescDto } from './dtos/create-data-flow-desc.dto';
import { UpdateDataFlowDescDto } from './dtos/update-data-flow-desc.dto';

@Injectable()
export class DataFlowDescService {
  constructor(
    private readonly prisma: PrismaService
  ){}

  public async create(createDataFlowDescDto: CreateDataFlowDescDto) {
    const data = {
      ...createDataFlowDescDto
    }

    const createdDataFlowDesc = await this.prisma.dataFlowDesc.create({
      data: {
        invt_id: data.invtId,
        collect: data.collect,
        store: data.store,
        use: data.use,
        share: data.share,
        destroy: data.destroy
      }
    });

    return createdDataFlowDesc;
  }

  public async update(updateDataFlowDescDto: UpdateDataFlowDescDto) {
    const data = {
      ...updateDataFlowDescDto
    }

    const now = new Date();


    await this.prisma.dataFlowDesc.update({
      where: {
        id: data.id
      },
      data: {
        collect: data.collect || undefined,
        store: data.store || undefined,
        use: data.use || undefined,
        share: data.share || undefined,
        destroy: data.destroy || undefined
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
