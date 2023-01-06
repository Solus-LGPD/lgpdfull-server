import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLifeCycleDto } from './dtos/create-life-cycle.dto';
import { UpdateLifeCycleDto } from './dtos/update-life-cycle.dto';

@Injectable()
export class LifeCycleService {
  constructor(
    private readonly prisma: PrismaService
  ){}

  public async create(createLifeCycleDto: CreateLifeCycleDto) {
    const data = {
      ...createLifeCycleDto
    }

    const createdInventory = await this.prisma.lyfeCycle.create({
      data: {
        invt_id: data.invtId,
        collect: data.collect,
        store: data.store,
        use: data.use,
        share: data.share,
        destroy: data.destroy
      }
    });

    return createdInventory;
  }

  public async update(updateLifeCycleDto: UpdateLifeCycleDto) {
    const data = {
      ...updateLifeCycleDto
    }

    const now = new Date();


    await this.prisma.lyfeCycle.update({
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
      msg: 'Updated'
    };
  }
}
